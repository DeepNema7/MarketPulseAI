from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException


async def http_exception_handler(
    request: Request,
    exc: HTTPException
):

    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "status_code": exc.status_code,
            "message": exc.detail
        }
    )


async def validation_exception_handler(
    request: Request,
    exc: RequestValidationError
):

    return JSONResponse(
        status_code=400,
        content={
            "success": False,
            "status_code":400,
            "message": "Invalid request data"
        }
    )


async def server_exception_handler(
    request: Request,
    exc: Exception
):

    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "status_code":500,
            "message":"Internal server error"
        }
    ) 

from fastapi import HTTPException


def data_not_found(message: str = "Data not found"):

    raise HTTPException(
        status_code=404,
        detail=message
    )