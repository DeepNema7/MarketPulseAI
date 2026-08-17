from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError
from fastapi.middleware.cors import CORSMiddleware
from starlette.exceptions import HTTPException

from slowapi import _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware

from app.core.logger import logger
from app.core.exceptions import (
    http_exception_handler,
    validation_exception_handler,
    server_exception_handler,
)
from app.middleware.rate_limit import limiter

from app.database.connection import engine, Base

# Import models so SQLAlchemy creates the tables
from app.models import market_model
from app.models import user

# Routers
from app.api.market import router as market_router
from app.api.routes.health import router as health_router
from app.routers import auth

from app.api.ai import router as ai_router


# ---------------------------------------------------
# Create Database Tables
# ---------------------------------------------------

Base.metadata.create_all(bind=engine)


# ---------------------------------------------------
# FastAPI App
# ---------------------------------------------------

app = FastAPI(
    title="MarketPulseAI",
    version="1.0.0",
)


# ---------------------------------------------------
# CORS
# ---------------------------------------------------

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",

    # Add your deployed frontend here later
    # "https://marketpulseai.netlify.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------
# Rate Limiter
# ---------------------------------------------------

app.state.limiter = limiter

app.add_middleware(SlowAPIMiddleware)

app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler,
)


# ---------------------------------------------------
# Startup Event
# ---------------------------------------------------

@app.on_event("startup")
def startup_event():
    logger.info("MarketPulseAI Backend Started Successfully")


# ---------------------------------------------------
# Exception Handlers
# ---------------------------------------------------

app.add_exception_handler(
    HTTPException,
    http_exception_handler,
)

app.add_exception_handler(
    RequestValidationError,
    validation_exception_handler,
)

app.add_exception_handler(
    Exception,
    server_exception_handler,
)


# ---------------------------------------------------
# Routers
# ---------------------------------------------------

app.include_router(auth.router)

app.include_router(
    market_router,
    prefix="/market",
    tags=["Market"],
)

app.include_router(
    health_router,
    tags=["Health"],
)

app.include_router(ai_router)


# ---------------------------------------------------
# Root Endpoint
# ---------------------------------------------------

@app.get("/")
def root():
    return {
        "message": "Welcome to MarketPulseAI API",
        "version": "1.0.0",
        "status": "Running",
    } 