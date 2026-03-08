import React from "react";

function ATSReport({ result }) {

  if (!result) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">ATS Report</h1>
        <p className="text-gray-500 mt-4">
          Please analyze a resume first.
        </p>
      </div>
    );
  }

  return (

    <div className="space-y-8">

      <h1 className="text-3xl font-bold">
        Complete ATS Resume Report
      </h1>

      {/* ATS Score */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-2">
          ATS Compatibility Score
        </h2>
        <p className="text-4xl font-bold text-blue-600">
          {result.score}%
        </p>
      </div>

      {/* Matched Skills */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          Matched Skills
        </h2>

        <ul>
          {result.matched_skills?.map((skill, i) => (
            <li key={i} className="text-green-600">
              ✔ {skill}
            </li>
          ))}
        </ul>

      </div>

      {/* Missing Skills */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          Missing Skills
        </h2>

        <ul>
          {result.missing_skills?.map((skill, i) => (
            <li key={i} className="text-red-500">
              ✖ {skill}
            </li>
          ))}
        </ul>

      </div>

      {/* AI Suggestions */}
      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">
          AI Resume Improvement Suggestions
        </h2>

        <ul>
          {result.suggestions?.map((s, i) => (
            <li key={i} className="mb-2">
              • {s}
            </li>
          ))}
        </ul>

      </div>

      {/* Interview Questions */}
      <div className="bg-white p-6 rounded shadow">

        <h2 className="text-xl font-bold mb-4">
          Possible Interview Questions
        </h2>

        <ul>
          {result.interview_questions?.map((q, i) => (
            <li key={i} className="mb-2">
              • {q}
            </li>
          ))}
        </ul>

      </div>

    </div>

  );
}

export default ATSReport;