from fastapi import Header, HTTPException, status
from typing import Optional

async def get_current_user(
    authorization: Optional[str] = Header(default=None)
):
    """
    Simple authentication dependency.
    For hackathon/demo purposes, this accepts:
    - Bearer token (any non-empty value)
    - Or allows guest access if no token is present
    """

    # Guest user (allowed for demo)
    if authorization is None:
        return {
            "user_id": "guest",
            "role": "guest",
            "authenticated": False
        }

    # Basic Bearer token validation
    if not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authorization header format"
        )

    token = authorization.replace("Bearer ", "").strip()

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Empty token"
        )

    # Mock verified user
    return {
        "user_id": "user_123",
        "role": "user",
        "authenticated": True
    }
