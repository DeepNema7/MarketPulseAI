from fastapi import FastAPI

from app.api.market import router as market_router

from app.database.connection import engine, Base
from app.models import market_model


# Create database tables automatically
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="MarketPulseAI",
    version="1.0.0"
)


# Include API routes
app.include_router(
    market_router,
    prefix="/market",
    tags=["Market"]
)


@app.get("/")
def home():

    return {
        "message": "Welcome to MarketPulseAI"
    } 