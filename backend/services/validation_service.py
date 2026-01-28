class ValidationService:
    """
    Handles validation of feedback by native speakers.
    """

    def validate_feedback(self, feedback, validator_role: str):
        if validator_role != "native_speaker":
            return False

        feedback.status = "validated"
        return True
