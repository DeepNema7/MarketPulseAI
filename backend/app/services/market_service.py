import yfinance as yf

from app.schemas.company import CompanyResponse

from app.core.exceptions import data_not_found

from app.cache.cache_manager import (
    get_cache,
    set_cache
)


# --------------------
# STOCK SERVICE
# --------------------

def get_stock_price(symbol: str):

    symbol = symbol.strip().upper()

    cache_key = f"stock_{symbol}"


    cached_data = get_cache(cache_key)


    if cached_data:

        return cached_data


    try:

        stock = yf.Ticker(symbol)

        info = stock.fast_info


        data = {

            "symbol": symbol,

            "last_price": float(
                info.get(
                    "lastPrice",
                    0
                )
            ),

            "currency": info.get(
                "currency",
                "USD"
            ),

            "exchange": info.get(
                "exchange",
                "N/A"
            )

        }


        set_cache(
            cache_key,
            data
        )


        return data


    except Exception:

        data_not_found(
            "Invalid stock symbol"
        )



# --------------------
# COMPANY SERVICE
# --------------------

# --------------------
# COMPANY SERVICE
# --------------------

def get_company_info(symbol: str):

    symbol = symbol.strip().upper()

    try:

        company = yf.Ticker(symbol)

        info = company.info


        if not info or not info.get("longName"):

            data_not_found(
                "Invalid company symbol"
            )


        return CompanyResponse(

            symbol=symbol,

            name=info.get(
                "longName"
            ),

            sector=info.get(
                "sector"
            ),

            industry=info.get(
                "industry"
            ),

            country=info.get(
                "country"
            ),

            website=info.get(
                "website"
            )

        )


    except Exception as e:

        print(e)

        data_not_found(
            "Invalid company symbol"
        ) 


# --------------------
# HISTORY SERVICE
# --------------------

def get_stock_history(symbol: str):

    symbol = symbol.strip().upper()


    try:

        stock = yf.Ticker(symbol)


        data = stock.history(
            period="30d"
        )


        history = []


        for date, row in data.iterrows():

            history.append(

                {
                    "date": str(
                        date.date()
                    ),

                    "open": row["Open"],

                    "high": row["High"],

                    "low": row["Low"],

                    "close": row["Close"],

                    "volume": row["Volume"]
                }

            )


        return {

            "symbol": symbol,

            "history": history

        }


    except Exception:

        data_not_found(
            "History unavailable"
        )



# --------------------
# MULTIPLE STOCK SERVICE
# --------------------

def get_multiple_stocks():

    symbols = [

        "AAPL",

        "MSFT",

        "GOOGL",

        "TSLA"

    ]


    return [

        get_stock_price(symbol)

        for symbol in symbols

    ]



# --------------------
# CRYPTO SERVICE
# --------------------

def get_crypto_price(symbol: str):

    symbol = symbol.strip().upper()


    cache_key = f"crypto_{symbol}"


    cached_data = get_cache(
        cache_key
    )


    if cached_data:

        return cached_data


    try:

        crypto_symbol = (
            symbol + "-USD"
        )


        crypto = yf.Ticker(
            crypto_symbol
        )


        info = crypto.fast_info


        data = {

            "symbol": crypto_symbol,

            "price": float(
                info.get(
                    "lastPrice",
                    0
                )
            ),

            "currency": info.get(
                "currency",
                "USD"
            )

        }


        set_cache(
            cache_key,
            data
        )


        return data


    except Exception:

        data_not_found(
            "Invalid crypto symbol"
        )



# --------------------
# MARKET SUMMARY SERVICE
# --------------------

def get_market_summary():


    return {

        "stocks": get_multiple_stocks(),


        "crypto": [

            get_crypto_price(
                "BTC"
            ),

            get_crypto_price(
                "ETH"
            ),

            get_crypto_price(
                "SOL"
            )

        ]

    } 