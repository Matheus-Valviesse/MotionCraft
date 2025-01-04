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
        className=" border-[10px] rounded-full border-[#bdbdbd] border-t-black w-20 p-12 z-3"
      />
  );

  export default Spinner;
  `;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4  z-0">
      <h1 className="text-2xl font-bold mb-6 text-black">Load Spinner</h1>

      <div className=" grid grid-cols-2 place-items-center ">
        <div className="z-[0]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className=" border-[10px] rounded-full border-[#bdbdbd] border-t-black w-20 p-12 z-3"
          />
        </div>

        <div className="mt-4 w-full max-w-[600px] p-4 bg-[#4d4c4c] rounded shadow">
          <SyntaxHighlighter language="jsx" style={oneDark}>
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
