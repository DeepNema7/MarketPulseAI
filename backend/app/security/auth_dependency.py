from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

from sqlalchemy.orm import Session


from app.security.jwt import verify_token

from app.database.connection import get_db

from app.models.user import User



oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)



def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):

    email = verify_token(token)


    if email is None:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )


    user = (
        db.query(User)
        .filter(User.email == email)
        .first()
    )


    if user is None:

        raise HTTPException(
            status_code=401,
            detail="User not found"
        )


    return user 