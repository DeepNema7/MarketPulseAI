from fastapi import APIRouter

from app.schemas.stock import StockResponse
from app.schemas.company import CompanyResponse

from app.services.market_service import get_crypto_price

from app.services.market_service import get_market_summary

from app.services.market_service import (
    get_stock_price,
    get_company_info,
    get_stock_history,
    get_multiple_stocks
)
 

router = APIRouter()


@router.get(
    "/stock/{symbol}",
    response_model=StockResponse,
    summary="Get Live Stock Information",
    description="Returns real-time stock information."
)
def stock(symbol: str):

    return get_stock_price(symbol)



@router.get(
    "/company/{symbol}",
    response_model=CompanyResponse,
    summary="Get Company Information",
    description="Returns company profile information."
)
def company(symbol: str):

    return get_company_info(symbol)



@router.get(
    "/history/{symbol}",
    summary="Get Stock History",
    description="Returns last 30 days stock history."
)
def stock_history(symbol: str):

    return get_stock_history(symbol)

@router.get("/stocks")
def multiple_stocks():
    return get_multiple_stocks()

@router.get("/crypto/{symbol}")
def crypto(symbol: str):
    return get_crypto_price(symbol)

@router.get("/summary")
def market_summary():
    return get_market_summary()