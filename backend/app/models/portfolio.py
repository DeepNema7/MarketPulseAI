from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship

from app.database.connection import Base


class Portfolio(Base):
    __tablename__ = "portfolio"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    symbol = Column(
        String,
        nullable=False
    )

    quantity = Column(
        Float,
        nullable=False
    )

    buy_price = Column(
        Float,
        nullable=False
    )

    user = relationship(
        "User",
        back_populates="portfolios"
    )