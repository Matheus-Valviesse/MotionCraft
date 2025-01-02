"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Home() {
  const [showCode, setShowCode] = useState(false);

  const codeSnippet = `
import { motion } from "framer-motion";

const Spinner = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    style={{
      width: 50,
      height: 50,
      border: "5px solid #ccc",
      borderTop: "5px solid #0070f3",
      borderRadius: "50%",
    }}
  />
);

export default Spinner;
`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Framer Motion Spinner Demo</h1>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          width: 50,
          height: 50,
          border: "5px solid #ccc",
          borderTop: "5px solid #0070f3",
          borderRadius: "50%",
        }}
      />
      <button
        onClick={() => setShowCode(!showCode)}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showCode ? "Esconder Código" : "Mostrar Código"}
      </button>
      {showCode && (
        <div className="mt-4 w-full max-w-2xl p-4 bg-white rounded shadow">
          <SyntaxHighlighter language="jsx" style={oneDark}>
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}
