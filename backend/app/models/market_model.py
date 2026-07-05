from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

from app.database.connection import Base


class StockData(Base):

    __tablename__ = "stock_data"


    id = Column(Integer, primary_key=True, index=True)

    symbol = Column(String, index=True)

    price = Column(Float)

    currency = Column(String)

    exchange = Column(String)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )



class CryptoData(Base):

    __tablename__ = "crypto_data"


    id = Column(Integer, primary_key=True, index=True)

    symbol = Column(String, index=True)

    price = Column(Float)

    currency = Column(String)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )