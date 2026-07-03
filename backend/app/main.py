from fastapi import FastAPI

from app.api.market import router as market_router


app = FastAPI(
    title="MarketPulseAI",
    version="1.0.0"
)


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