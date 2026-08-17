from pydantic import BaseModel


class PortfolioCreate(BaseModel):

    symbol: str

    quantity: float

    buy_price: float


class PortfolioResponse(BaseModel):

    id: int

    symbol: str

    quantity: float

    buy_price: float

    class Config:
        from_attributes = True