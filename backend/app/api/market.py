from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.security.auth_dependency import get_current_user 


# Schemas
from app.schemas.stock import StockResponse
from app.schemas.company import CompanyResponse


# Database
from app.database.connection import get_db


# CRUD
from app.crud.market_crud import (
    save_stock_data,
    save_crypto_data
)


# Services
from app.services.market_service import (
    get_stock_price,
    get_company_info,
    get_stock_history,
    get_multiple_stocks,
    get_crypto_price,
    get_market_summary
)


router = APIRouter()



# -------------------------
# STOCK API
# -------------------------

@router.get(
    "/stock/{symbol}",
    summary="Get Live Stock Information",
    description="Returns real-time stock information and saves it to PostgreSQL."
)
def stock(
    symbol: str,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    data = get_stock_price(symbol)


    save_stock_data(
        db=db,
        symbol=data["symbol"],
        price=data["last_price"],
        currency=data["currency"],
        exchange=data["exchange"]
    )


    return data 


# -------------------------
# COMPANY API
# -------------------------

@router.get(
    "/company/{symbol}",
    response_model=CompanyResponse,
    summary="Get Company Information",
    description="Returns company profile information."
)
def company(symbol: str):

    return get_company_info(symbol)



# -------------------------
# HISTORY API
# -------------------------

@router.get(
    "/history/{symbol}",
    summary="Get Stock History",
    description="Returns last 30 days stock history."
)
def stock_history(symbol: str):

    return get_stock_history(symbol)



# -------------------------
# MULTIPLE STOCK API
# -------------------------

@router.get(
    "/stocks",
    summary="Get Multiple Stocks"
)
def multiple_stocks():

    return get_multiple_stocks()



# -------------------------
# CRYPTO API
# -------------------------

@router.get(
    "/crypto/{symbol}",
    summary="Get Crypto Price"
)
def crypto(
    symbol: str,
    db: Session = Depends(get_db)
):

    data = get_crypto_price(symbol)


    save_crypto_data(
        db=db,
        symbol=data["symbol"],
        price=data["price"],
        currency=data["currency"]
    )


    return data



# -------------------------
# MARKET SUMMARY API
# -------------------------

@router.get(
    "/summary",
    summary="Market Summary"
)
def market_summary():

    return get_market_summary()