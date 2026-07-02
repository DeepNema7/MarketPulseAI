from fastapi import APIRouter

from app.schemas.stock import StockResponse
from app.services.market_service import get_stock_price

from app.schemas.company import CompanyResponse
from app.services.market_service import get_company_info

router = APIRouter()


@router.get(
    "/stock/{symbol}",
    response_model=StockResponse,
    summary="Get Live Stock Information",
    description="Returns real-time stock information for the given stock symbol."
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