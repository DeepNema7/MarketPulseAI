from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException

from fastapi.middleware.cors import CORSMiddleware

from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from slowapi import _rate_limit_exceeded_handler

from app.core.logger import logger

from app.api.routes.health import router as health_router

from app.core.exceptions import (
    http_exception_handler,
    validation_exception_handler,
    server_exception_handler
)

from app.middleware.rate_limit import limiter

from app.api.market import router as market_router

from app.database.connection import engine, Base

from app.models import market_model
from app.models import user

from app.routers import auth

 

# Create database tables
Base.metadata.create_all(
    bind=engine
)


# FastAPI Application
app = FastAPI(
    title="MarketPulseAI",
    version="1.0.0"
)

app.include_router(health_router)

# CORS Middleware

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]


app.add_middleware(
    CORSMiddleware,

    allow_origins=origins,

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

app.state.limiter = limiter


app.add_middleware(
    SlowAPIMiddleware
)


app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler
)


# Logger startup
@app.on_event("startup")
def startup_event():
    logger.info(
        "MarketPulseAI Backend Started Successfully"
    )


# Rate limiter
app.state.limiter = limiter


app.add_middleware(
    SlowAPIMiddleware
)


app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler
)


# Global Exception Handlers
app.add_exception_handler(
    HTTPException,
    http_exception_handler
)


app.add_exception_handler(
    RequestValidationError,
    validation_exception_handler
)


app.add_exception_handler(
    Exception,
    server_exception_handler
)


# Authentication APIs
app.include_router(
    auth.router
)


# Market APIs
app.include_router(
    market_router,
    prefix="/market",
    tags=["Market"]
)


# Health/Home API
@app.get("/")
def home():

    return {
        "message": "Welcome to MarketPulseAI"
    } 