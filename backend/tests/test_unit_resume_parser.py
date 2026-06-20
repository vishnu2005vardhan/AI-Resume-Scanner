import io
import unittest
from unittest.mock import patch, MagicMock

from resume_parser import extract_text_from_pdf


class TestResumeParserUnit(unittest.TestCase):
    def test_extract_text_from_pdf_concatenates_pages(self):
        fake_pdf = MagicMock()
        # pdf.pages yields page objects with extract_text()
        page1 = MagicMock()
        page1.extract_text.return_value = "Page1 text"
        page2 = MagicMock()
        page2.extract_text.return_value = "Page2 text"
        fake_pdf.pages = [page1, page2]
        fake_cm = MagicMock()
        fake_cm.__enter__.return_value = fake_pdf

        with patch("resume_parser.pdfplumber.open", return_value=fake_cm):
            result = extract_text_from_pdf(io.BytesIO(b"dummy"))

        self.assertIn("Page1 text", result)
        self.assertIn("Page2 text", result)


if __name__ == "__main__":
    unittest.main()

