"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Home() {
  const codeSnippet = `
  import { motion } from "framer-motion";

  const Spinner = () => (
 <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className=" border-8 rounded-full border-[#bdbdbd] border-t-black w-20 p-10"
        />
  );

  export default Spinner;
  `;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 z-10">
      <h1 className="text-2xl font-bold mb-6 text-black">Load Spinner</h1>
      <div className="grid grid-cols-2 place-items-center items-center gap-10 z-10 ">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className=" border-8 rounded-full border-[#bdbdbd] border-t-black w-20 p-10"
        />

        <div className="mt-4 w-full max-w-[600px] p-4 bg-white rounded shadow">
          <SyntaxHighlighter language="jsx" style={oneDark}>
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
