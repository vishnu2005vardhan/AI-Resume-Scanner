import io
import unittest
from unittest.mock import patch

import app as app_module


class TestSystemSmoke(unittest.TestCase):
    def test_app_routing_smoke(self):
        # Smoke test that Flask app can create test client and home route returns.
        client = app_module.app.test_client()
        resp = client.get("/")
        self.assertEqual(resp.status_code, 200)

    def test_analyze_smoke_without_spacy_model(self):
        # Patch lower-level analyzer to keep smoke test deterministic.
        with patch("app.analyze_resume", return_value={"score": 50, "matched_skills": [], "missing_skills": [], "suggestions": [], "interview_questions": []}), \
             patch("app.extract_text_from_pdf", return_value="TEXT"):
            client = app_module.app.test_client()
            data = {
                "job_description": "JD",
                "resume": (io.BytesIO(b"%PDF-1.4 dummy"), "resume.pdf"),
            }
            resp = client.post("/analyze", data=data, content_type="multipart/form-data")
            self.assertEqual(resp.status_code, 200)


if __name__ == "__main__":
    unittest.main()

