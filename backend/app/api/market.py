from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session

# Rate Limiter
from app.middleware.rate_limit import limiter

# Database
from app.database.connection import get_db

# Schemas
from app.schemas.company import CompanyResponse

# CRUD
from app.crud.market_crud import (
    save_stock_data,
    save_crypto_data,
)

# Services
from app.services.market_service import (
    get_stock_price,
    get_company_info,
    get_stock_history,
    get_multiple_stocks,
    get_crypto_price,
    get_market_summary,
)

router = APIRouter()


# ---------------------------------------------------
# SEARCH STOCK API
# ---------------------------------------------------

@router.get(
    "/search/{symbol}",
    summary="Search Stock"
)
@limiter.limit("20/minute")
def search_stock(
    request: Request,
    symbol: str,
):
    return get_stock_price(symbol.upper())


# ---------------------------------------------------
# STOCK API
# ---------------------------------------------------

@router.get(
    "/stock/{symbol}",
    summary="Get Live Stock Information",
    description="Returns real-time stock information and saves it to PostgreSQL."
)
@limiter.limit("10/minute")
def stock(
    request: Request,
    symbol: str,
    db: Session = Depends(get_db)
):

    data = get_stock_price(symbol.upper())

    save_stock_data(
        db=db,
        symbol=data["symbol"],
        price=data["last_price"],
        currency=data["currency"],
        exchange=data["exchange"]
    )

    return data


# ---------------------------------------------------
# COMPANY API
# ---------------------------------------------------

@router.get(
    "/company/{symbol}",
    response_model=CompanyResponse,
    summary="Get Company Information",
    description="Returns company profile information."
)
@limiter.limit("20/minute")
def company(
    request: Request,
    symbol: str,
):

    return get_company_info(symbol.upper())


# ---------------------------------------------------
# HISTORY API
# ---------------------------------------------------

@router.get(
    "/history/{symbol}",
    summary="Get Stock History",
    description="Returns last 30 days stock history."
)
@limiter.limit("20/minute")
def stock_history(
    request: Request,
    symbol: str,
):

    return get_stock_history(symbol.upper())


# ---------------------------------------------------
# MULTIPLE STOCK API
# ---------------------------------------------------

@router.get(
    "/stocks",
    summary="Get Multiple Stocks"
)
@limiter.limit("10/minute")
def multiple_stocks(
    request: Request,
):

    return get_multiple_stocks()


# ---------------------------------------------------
# CRYPTO API
# ---------------------------------------------------

@router.get(
    "/crypto/{symbol}",
    summary="Get Crypto Price"
)
@limiter.limit("10/minute")
def crypto(
    request: Request,
    symbol: str,
    db: Session = Depends(get_db)
):

    data = get_crypto_price(symbol.upper())

    save_crypto_data(
        db=db,
        symbol=data["symbol"],
        price=data["price"],
        currency=data["currency"]
    )

    return data


# ---------------------------------------------------
# MARKET SUMMARY API
# ---------------------------------------------------

@router.get(
    "/summary",
    summary="Market Summary"
)
@limiter.limit("30/minute")
def market_summary(
    request: Request,
):

    return get_market_summary() 