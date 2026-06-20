import io
import unittest
from unittest.mock import patch

from app import app


class TestAnalyzeEndpointIntegration(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_analyze_endpoint_success(self):
        with patch("app.extract_text_from_pdf", return_value="RESUME TEXT"), \
             patch("app.analyze_resume", return_value={"score": 80, "matched_skills": [], "missing_skills": [], "suggestions": [], "interview_questions": []}):

            data = {
                "job_description": "JOB DESCRIPTION",
                "resume": (io.BytesIO(b"%PDF-1.4 dummy"), "resume.pdf"),
            }
            resp = self.client.post("/analyze", data=data, content_type="multipart/form-data")
            self.assertEqual(resp.status_code, 200)
            json_data = resp.get_json()
            self.assertIn("score", json_data)


if __name__ == "__main__":
    unittest.main()

