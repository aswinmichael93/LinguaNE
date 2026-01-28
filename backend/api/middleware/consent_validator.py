from fastapi import HTTPException, status

async def validate_consent(user: dict, consent_given: bool) -> bool:
    """
    Validates whether the user has given consent
    for using data to improve language models.
    """

    # Guest users must explicitly give consent
    if user.get("role") == "guest":
        if not consent_given:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Consent required for guest users"
            )
        return True

    # Authenticated users
    if user.get("authenticated"):
        if not consent_given:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="User consent required"
            )
        return True

    # Fallback safety check
    raise HTTPException(
        status_code=status.HTTP_403_FORBIDDEN,
        detail="Consent validation failed"
    )
