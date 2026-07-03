import yfinance as yf
from fastapi import HTTPException

from app.schemas.stock import StockResponse
from app.schemas.company import CompanyResponse


def get_stock_price(symbol: str) -> StockResponse:

    try:
        stock = yf.Ticker(symbol)
        info = stock.info

        return StockResponse(
            symbol=symbol.upper(),
            company=info.get("longName", "Unknown Company"),
            price=info.get("currentPrice") or info.get("regularMarketPrice", 0.0),
            previous_close=info.get("previousClose", 0.0),
            high=info.get("dayHigh", 0.0),
            low=info.get("dayLow", 0.0),
            volume=info.get("volume", 0),
            currency=info.get("currency", "N/A")
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


def get_company_info(symbol: str) -> CompanyResponse:

    try:
        stock = yf.Ticker(symbol)
        info = stock.info

        return CompanyResponse(
            symbol=symbol.upper(),
            company=info.get("longName", "Unknown Company"),
            sector=info.get("sector", "N/A"),
            industry=info.get("industry", "N/A"),
            country=info.get("country", "N/A"),
            website=info.get("website", "N/A"),
            employees=info.get("fullTimeEmployees", 0),
            business_summary=info.get(
                "longBusinessSummary",
                "N/A"
            )
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


def get_stock_history(symbol: str):

    try:
        stock = yf.Ticker(symbol)

        data = stock.history(period="30d")

        if data.empty:
            raise HTTPException(
                status_code=404,
                detail="Stock history not found"
            )

        history = []

        for date, row in data.iterrows():

            history.append(
                {
                    "date": str(date.date()),
                    "open": row["Open"],
                    "high": row["High"],
                    "low": row["Low"],
                    "close": row["Close"],
                    "volume": row["Volume"]
                }
            )

        return {
            "symbol": symbol.upper(),
            "history": history
        }


    except HTTPException:
        raise


    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )