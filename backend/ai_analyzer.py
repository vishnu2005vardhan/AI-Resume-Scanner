import spacy
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load NLP model
nlp = spacy.load("en_core_web_sm")

# Known tech skills list
TECH_SKILLS = [
    "python","java","c++","flask","react","node","sql","mongodb",
    "docker","kubernetes","aws","html","css","javascript",
    "tensorflow","pytorch","git","linux","django","pandas","numpy"
]


def extract_skills(text):

    text = text.lower()

    found_skills = []

    for skill in TECH_SKILLS:
        if skill in text:
            found_skills.append(skill)

    return found_skills


def analyze_resume(resume_text, job_description):

    # ATS similarity score
    vectorizer = CountVectorizer(stop_words="english")

    matrix = vectorizer.fit_transform([resume_text, job_description])

    similarity = cosine_similarity(matrix)[0][1]

    score = round(similarity * 100, 2)

    # Extract skills
    resume_skills = extract_skills(resume_text)
    job_skills = extract_skills(job_description)

    matched_skills = list(set(resume_skills).intersection(job_skills))

    missing_skills = list(set(job_skills) - set(resume_skills))

    # AI suggestions
    suggestions = []

    if score < 60:
        suggestions.append(
            "Your resume does not match the job description well."
        )

    if missing_skills:
        suggestions.append(
            "Consider adding these missing skills: "
            + ", ".join(missing_skills)
        )

    suggestions.append(
        "Add measurable achievements in your projects."
    )

    suggestions.append(
        "Clearly mention technologies used in each project."
    )

    # Interview questions generator
    interview_questions = []

    for skill in matched_skills[:5]:
        interview_questions.append(
            f"What projects have you built using {skill}?"
        )

    return {
        "score": score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "suggestions": suggestions,
        "interview_questions": interview_questions
    }

