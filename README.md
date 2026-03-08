🧠 AI Resume Scanner & ATS Analyzer

An AI-powered Resume Analysis Platform that evaluates resumes against job descriptions using Natural Language Processing (NLP) and Machine Learning techniques to generate an ATS (Applicant Tracking System) compatibility score, detect matched skills, identify missing skills, and provide AI-driven suggestions to improve the resume.

🚀 Project Overview

Many companies use Applicant Tracking Systems (ATS) to automatically filter resumes before they reach recruiters. Even qualified candidates may get rejected if their resumes do not contain the right keywords.

This project builds an AI Resume Scanner that helps candidates:

Compare resumes with job descriptions

Calculate ATS compatibility score

Identify skill gaps

Get AI-powered resume improvement suggestions

Generate possible interview questions

🏗️ System Architecture
React Frontend
      ↓
Axios API Request
      ↓
Flask Backend
      ↓
Resume Parser
      ↓
NLP Analyzer (spaCy + Scikit-learn)
      ↓
ATS Score + Skills Analysis
      ↓
React Dashboard Visualization
✨ Features Implemented
1️⃣ Resume Upload & Job Description Input

Users can:

Upload a PDF resume

Paste a job description

Submit the resume for AI analysis

2️⃣ ATS Compatibility Score

The system calculates how well a resume matches a job description using Cosine Similarity.

ATS Score = Cosine Similarity(resume_text, job_description)

Example Output:

ATS Score: 78%

This score represents how compatible the resume is with the job requirements.

3️⃣ Skill Gap Detection

The system identifies:

Matched Skills

Skills that appear in both the resume and job description.

Example:

✔ Python
✔ Flask
✔ SQL
Missing Skills

Skills required in the job description but not found in the resume.

Example:

✖ Docker
✖ Kubernetes
✖ AWS

This helps candidates understand what skills they should add.

4️⃣ AI Resume Improvement Suggestions

The system provides recommendations to improve the resume.

Example suggestions:

• Add measurable achievements in projects
• Include missing technical skills
• Clearly highlight frameworks and tools
5️⃣ Interview Question Generator

The system automatically generates interview questions based on detected skills.

Example:

• Explain your experience with Python
• What projects have you built using Flask?

This helps candidates prepare for interviews.

🖥️ Frontend Dashboard

The React dashboard provides a clean interface displaying:

ATS score visualization

Matched skills

Missing skills

AI suggestions

Interview preparation questions

📂 Project Structure
AI-Resume-Scanner
│
├── backend
│   ├── app.py
│   ├── ai_analyzer.py
│   ├── resume_parser.py
│   ├── requirements.txt
│   └── venv
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.js
│   │   │   ├── Sidebar.js
│   │   │   ├── UploadSection.js
│   │   │   ├── ATSScore.js
│   │   │   └── SkillsCard.js
│   │   │
│   │   ├── pages
│   │   │   ├── Dashboard.js
│   │   │   ├── ATSReport.js
│   │   │   └── AISuggestions.js
│   │   │
│   │   ├── App.js
│   │   └── index.js
│
└── README.md
⚙️ Technologies Used
Frontend

React.js

Tailwind CSS

Axios

React Router

Backend

Python

Flask

Flask-CORS

AI / NLP

spaCy

Scikit-learn

Cosine Similarity

CountVectorizer

🧪 How the AI Analysis Works
Step 1 — Resume Parsing

The uploaded resume is converted from PDF to plain text.

Step 2 — Text Vectorization

Using CountVectorizer:

Text → Numerical Vector
Step 3 — Similarity Calculation

Cosine Similarity calculates how similar two texts are:

Similarity = Cosine(Vector_Resume, Vector_JobDescription)
Step 4 — Skill Extraction

A predefined list of technical skills is used to detect:

Matched Skills

Missing Skills

▶️ Running the Project
Backend Setup

Navigate to backend folder:

cd backend

Create virtual environment:

python -m venv venv

Activate environment:

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Run backend server:

python app.py

Backend runs at:

http://127.0.0.1:5000
Frontend Setup

Navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Start React server:

npm start

Frontend runs at:

http://localhost:3000
