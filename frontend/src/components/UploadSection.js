import React, { useState } from "react";
import axios from "axios";

function UploadSection({ setResult }) {

  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = async () => {

    if (!file) {
      alert("Please upload a resume first");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("job_description", jobDescription);

    try {

      const response = await axios.post(
        "http://127.0.0.1:5000/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      setResult(response.data);

    } catch (error) {

      console.error("Error:", error);
      alert("Backend connection failed");

    }

  };

  return (

    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-xl font-bold mb-4">
        Upload Resume
      </h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <textarea
        placeholder="Paste Job Description"
        rows="5"
        className="border w-full mt-4 p-2"
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 mt-4 rounded"
      >
        Analyze Resume
      </button>

    </div>

  );
}

export default UploadSection;