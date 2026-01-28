from fastapi import APIRouter

router = APIRouter()

@router.get("/search")
async def search_dictionary(q: str, language: str):
    return {
        "results": [
            {
                "word": "ᱚᱲᱟᱜ",
                "meaning": "House",
                "pronunciation": "/ɔɽaɡ/"
            }
        ]
    }

@router.get("/word/{word_id}")
async def get_word(word_id: str):
    return {
        "word": "ᱫᱟᱜ",
        "meaning": "Water",
        "example": "I need water"
    }
