from sqlalchemy.orm import Session

from app.models.market_model import StockData, CryptoData


def save_stock_data(
    db: Session,
    symbol: str,
    price: float,
    currency: str,
    exchange: str
):

    stock = StockData(
        symbol=symbol,
        price=price,
        currency=currency,
        exchange=exchange
    )


    db.add(stock)

    db.commit()

    db.refresh(stock)


    return stock



def save_crypto_data(
    db: Session,
    symbol: str,
    price: float,
    currency: str
):

    crypto = CryptoData(
        symbol=symbol,
        price=price,
        currency=currency
    )


    db.add(crypto)

    db.commit()

    db.refresh(crypto)


    return crypto