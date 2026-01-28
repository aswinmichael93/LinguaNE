SUPPORTED_LANGUAGES = {
    "santali",
    "gondi",
    "kurukh",
    "english",
    "hindi"
}

def validate_language(code: str) -> bool:
    return code in SUPPORTED_LANGUAGES
