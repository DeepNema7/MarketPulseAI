import yfinance as yf
from fastapi import HTTPException

from app.schemas.stock import StockResponse
from app.schemas.company import CompanyResponse

from app.core.exceptions import data_not_found


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


def get_company_info(symbol: str):

    try:
        company = yf.Ticker(symbol)
        info = company.info

        if not info.get("longName"):
            data_not_found(
                "Invalid company symbol"
            )

        return CompanyResponse(
            symbol=symbol.upper(),
            name=info.get("longName"),
            sector=info.get("sector"),
            industry=info.get("industry"),
            country=info.get("country"),
            website=info.get("website")
        )

    except Exception:
        data_not_found(
            "Invalid company symbol"
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

    except Exception:
        data_not_found(
            "Invalid history symbol"
        ) 

def get_multiple_stocks():

    symbols = ["AAPL", "MSFT", "GOOGL", "TSLA"]

    stocks = []

    for symbol in symbols:
        data = get_stock_price(symbol)
        stocks.append(data)

    return stocks

def get_crypto_price(symbol: str):

    try:
        crypto_symbol = symbol.upper() + "-USD"

        crypto = yf.Ticker(crypto_symbol)

        info = crypto.fast_info

        price = info["lastPrice"]

        return {
            "symbol": crypto_symbol,
            "last_price": price,
            "currency": info["currency"],
            "exchange": info["exchange"]
        }

    except Exception:
        data_not_found(
            "Invalid crypto symbol"
        ) 
    
def get_market_summary():

    stocks = ["AAPL", "MSFT", "TSLA"]
    cryptos = ["BTC", "ETH", "SOL"]

    stock_data = []
    crypto_data = []

    for stock in stocks:
        try:
            stock_data.append(
                get_stock_price(stock)
            )
        except:
            stock_data.append({
                "symbol": stock,
                "error": "Data unavailable"
            })


    for crypto in cryptos:
        try:
            crypto_data.append(
                get_crypto_price(crypto)
            )
        except:
            crypto_data.append({
                "symbol": crypto,
                "error": "Data unavailable"
            })


    return {
        "stocks": stock_data,
        "crypto": crypto_data
    }     

def get_stock_price(symbol: str):

    stock = yf.Ticker(symbol)

    try:
        info = stock.fast_info

        if not info:
            data_not_found(
                "Stock data not found"
            )

        return {
            "symbol": symbol.upper(),
            "last_price": info["lastPrice"],
            "currency": info["currency"],
            "exchange": info["exchange"]
        }

    except Exception:

        data_not_found(
            "Invalid stock symbol"
        )