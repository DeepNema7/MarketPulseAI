from sqlalchemy.orm import Session

from app.models.portfolio import Portfolio


def create_portfolio(
    db: Session,
    user_id: int,
    data
):

    portfolio = Portfolio(

        user_id=user_id,

        symbol=data.symbol.upper(),

        quantity=data.quantity,

        buy_price=data.buy_price

    )

    db.add(portfolio)

    db.commit()

    db.refresh(portfolio)

    return portfolio


def get_user_portfolio(
    db: Session,
    user_id: int
):

    return (
        db.query(Portfolio)
        .filter(
            Portfolio.user_id == user_id
        )
        .all()
    )