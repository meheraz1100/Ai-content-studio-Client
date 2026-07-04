"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
 const finalPrompt = `
Write a professional email about:

${prompt}
`;
const API = process.env.NEXT_PUBLIC_API_URL;

const handleGenerate = async () => {
    if (!prompt) return;
    
    setLoading(true);
    

    try {
      const res = await axios.post(
        `${API}/api/ai/generate`,
        {
          prompt: finalPrompt,
        }
      );

      setResult(res.data.result);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <h1 className="mb-8 text-4xl font-bold">
        AI Email Generator
      </h1>

      <textarea
        rows={8}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write your prompt..."
        className="w-full rounded-lg border p-4"
      />

      <button
        onClick={handleGenerate}
        className="mt-6 rounded-lg bg-blue-600 px-8 py-3 text-white"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {result && (
        <div className="mt-10 rounded-xl border bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            AI Response
          </h2>

          <p className="whitespace-pre-wrap">
            <ReactMarkdown>
              {result}
            </ReactMarkdown>
          </p>
        </div>
      )}
    </main>
  );
}