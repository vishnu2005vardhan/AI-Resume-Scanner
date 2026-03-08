from flask import Flask, request, jsonify
from flask_cors import CORS
from resume_parser import extract_text_from_pdf
from ai_analyzer import analyze_resume

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "AI Resume Scanner Backend Running"


@app.route("/analyze", methods=["POST"])
def analyze():

    print("Analyze API called")   # DEBUG

    resume = request.files["resume"]
    job_description = request.form["job_description"]

    resume_text = extract_text_from_pdf(resume)

    print("Resume text extracted")  # DEBUG

    result = analyze_resume(resume_text, job_description)

    print(result)   # DEBUG

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)