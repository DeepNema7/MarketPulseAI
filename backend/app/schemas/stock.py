from pydantic import BaseModel
class StockResponse(BaseModel):
    symbol: str
    company: str
    price: float
    previous_close: float
    high: float
    low: float
    volume: int
    currency: str