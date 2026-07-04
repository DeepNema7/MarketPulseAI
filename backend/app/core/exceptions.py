from fastapi import HTTPException


def data_not_found(message="Market data not found"):
    raise HTTPException(
        status_code=404,
        detail=message
    )


def server_error(message="Internal server error"):
    raise HTTPException(
        status_code=500,
        detail=message
    )