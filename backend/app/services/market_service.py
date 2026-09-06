import yfinance as yf

from app.schemas.company import CompanyResponse

from app.core.exceptions import data_not_found


from app.services.stock_symbols import COMPANY_SYMBOLS 

from app.cache.cache_manager import (
    get_cache,
    set_cache
)




# --------------------
# STOCK SERVICE
# --------------------

def get_stock_price(symbol: str):

    # Remove extra spaces
    symbol = symbol.strip()

    # Convert company name to stock symbol if available
    symbol = COMPANY_SYMBOLS.get(
        symbol.lower(),
        symbol.upper()
    )

    # Company exists but is not publicly traded
    if symbol is None:
        data_not_found(
            "This company is not publicly traded."
        )

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

def get_company_info(symbol: str):

    symbol = symbol.strip()

    # Convert company name to stock symbol
    symbol = COMPANY_SYMBOLS.get(
        symbol.lower(),
        symbol.upper()
    )

    cache_key = f"company_{symbol}"

    cached_data = get_cache(cache_key)

    if cached_data:
        return CompanyResponse(**cached_data)

    try:
        company = yf.Ticker(symbol)

        # Primary source
        info = company.info or {}

        # Some yfinance versions/environments work better
        # with get_info() when info is incomplete.
        if not info.get("longName") and not info.get("shortName"):
            try:
                info = company.get_info() or {}
            except Exception:
                pass

        # Try fast_info for market cap if normal info doesn't have it
        market_cap = info.get("marketCap")

        if market_cap is None:
            try:
                fast_info = company.fast_info
                market_cap = fast_info.get("marketCap")
            except Exception:
                pass

        data = {
            "symbol": symbol,

            "name": (
                info.get("longName")
                or info.get("shortName")
                or symbol
            ),

            "sector": info.get("sector"),

            "industry": info.get("industry"),

            "country": info.get("country"),

            "website": info.get("website"),

            "market_cap": market_cap,

            "employee_count": info.get(
                "fullTimeEmployees"
            )
        }

        # Save only if we actually received useful company data
        if (
            data["name"] != symbol
            or data["sector"]
            or data["industry"]
            or data["country"]
            or data["website"]
            or data["market_cap"]
            or data["employee_count"]
        ):
            set_cache(
                cache_key,
                data
            )

        return CompanyResponse(**data)

    except Exception as e:

        print(
            "COMPANY API ERROR:",
            repr(e)
        )

        return CompanyResponse(
            symbol=symbol,
            name=symbol,
            sector=None,
            industry=None,
            country=None,
            website=None,
            market_cap=None,
            employee_count=None
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