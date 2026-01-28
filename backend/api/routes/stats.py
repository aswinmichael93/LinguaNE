from fastapi import APIRouter

router = APIRouter()

@router.get("/community")
async def community_stats():
    return {
        "total_users": 1247,
        "total_translations": 45678,
        "languages_supported": 12,
        "feedback_validated": 3456
    }
