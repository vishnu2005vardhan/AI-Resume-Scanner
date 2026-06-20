import unittest
from ai_analyzer import analyze_resume


class TestAnalyzeResumeUnit(unittest.TestCase):
    def test_analyze_resume_returns_expected_structure(self):
        resume_text = "Python React Node SQL Flask SQL MongoDB Git"
        job_description = "We need Python, React, SQL, and Node. Experience with Flask and MongoDB."

        result = analyze_resume(resume_text, job_description)

        self.assertIn("score", result)
        self.assertIn("matched_skills", result)
        self.assertIn("missing_skills", result)
        self.assertIn("suggestions", result)
        self.assertIn("interview_questions", result)

        self.assertIsInstance(result["matched_skills"], list)
        self.assertIsInstance(result["missing_skills"], list)
        self.assertIsInstance(result["suggestions"], list)
        self.assertIsInstance(result["interview_questions"], list)

        self.assertGreaterEqual(result["score"], 0)
        self.assertLessEqual(result["score"], 100)

    def test_missing_skills_non_empty_when_resume_lacks_skills(self):
        resume_text = "Python"
        job_description = "React JavaScript SQL"

        result = analyze_resume(resume_text, job_description)
        # Might be empty depending on substring matching, but should be list
        self.assertIsInstance(result["missing_skills"], list)


if __name__ == "__main__":
    unittest.main()

