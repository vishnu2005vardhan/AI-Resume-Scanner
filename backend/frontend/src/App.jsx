import React, { useState } from 'react';

const BACKEND_URL = 'http://127.0.0.1:5000/analyze';

export default function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  async function handleAnalyze(e) {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!resumeFile) {
      setError('Please upload a PDF resume.');
      return;
    }
    if (!jobDescription.trim()) {
      setError('Please paste the job description.');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('resume', resumeFile);
      formData.append('job_description', jobDescription);

      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        body: formData
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Backend error (${res.status}): ${text}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message || 'Analysis failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, Arial', maxWidth: 900, margin: '30px auto', padding: 16 }}>
      <h1 style={{ marginBottom: 8 }}>AI Resume ATS Analyzer</h1>
      <p style={{ marginTop: 0, color: '#555' }}>
        Upload your PDF resume + paste job description to get ATS score & suggestions.
      </p>

      <form onSubmit={handleAnalyze} style={{ display: 'grid', gap: 12 }}>
        <label>
          <div style={{ marginBottom: 6, fontWeight: 600 }}>PDF Resume</div>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
          />
        </label>

        <label>
          <div style={{ marginBottom: 6, fontWeight: 600 }}>Job Description</div>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={8}
            placeholder="Paste the job description here..."
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ddd' }}
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px 14px',
            borderRadius: 10,
            border: 'none',
            background: loading ? '#999' : '#111',
            color: 'white',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 700
          }}
        >
          {loading ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      </form>

      {error && (
        <div style={{ marginTop: 14, padding: 12, borderRadius: 10, background: '#ffe6e6', color: '#900' }}>
          {error}
        </div>
      )}

      {result && (
        <div style={{ marginTop: 18, padding: 14, borderRadius: 12, border: '1px solid #eee' }}>
          <h2 style={{ margin: 0 }}>Analysis Report</h2>

          <div style={{ marginTop: 8 }}>
            <b>ATS Score:</b> {result.score}
          </div>

          <div style={{ marginTop: 10 }}>
            <b>Matched Skills:</b>
            <ul>
              {(result.matched_skills || []).map((s) => (
                <li key={s}>{s}</li>
              ))}
              {(result.matched_skills || []).length === 0 && <li>None</li>}
            </ul>
          </div>

          <div style={{ marginTop: 10 }}>
            <b>Missing Skills:</b>
            <ul>
              {(result.missing_skills || []).map((s) => (
                <li key={s}>{s}</li>
              ))}
              {(result.missing_skills || []).length === 0 && <li>None</li>}
            </ul>
          </div>

          <div style={{ marginTop: 10 }}>
            <b>Suggestions:</b>
            <ul>
              {(result.suggestions || []).map((s, idx) => (
                <li key={`${s}-${idx}`}>{s}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 10 }}>
            <b>Interview Questions:</b>
            <ul>
              {(result.interview_questions || []).map((q, idx) => (
                <li key={`${q}-${idx}`}>{q}</li>
              ))}
              {(result.interview_questions || []).length === 0 && <li>None</li>}
            </ul>
          </div>
        </div>
      )}

      <div style={{ marginTop: 22, color: '#777', fontSize: 12 }}>
        Backend endpoint: <code>{BACKEND_URL}</code>
      </div>
    </div>
  );
}

