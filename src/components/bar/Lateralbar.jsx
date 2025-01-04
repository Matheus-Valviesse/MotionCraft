"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Importação corrigida

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Lateralbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar abertura
  const [itensSurge, setItensSurge] = useState(false);

  const toggleSidebar = () => {
    if (!isOpen) {
      setIsOpen(true); // Alterna entre aberto e fechado
    } else {
      setItensSurge(false);
    }
  };

  const barControll = {
    open: { width: 300 },
    close: { width: 50 },
  };
  const inputControll = {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: -50 },
  };

  return (
    <motion.div
      className="absolute w-[50px] h-full bg-[#131212] shadow-lg shadow-[#6fda6160] rounded-r-md z-[100]"
      variants={barControll}
      animate={isOpen ? "open" : "close"} // Alterna a largura
      transition={{ duration: 0.4, ease: "easeOut" }}
      onAnimationComplete={(e) => {
        if (e == "open") setItensSurge(true);
      }}
    >
      <div className="w-full absolute ">
        <button
          onClick={toggleSidebar} // Chama a função ao clicar
          className="cursor-pointer right-0 mr-1 mt-1 absolute p-4 rounded-full"
        >
          <MdOutlineArrowForwardIos
            className={`text-[#35b31b] text-[22px] ${
              isOpen ? "rotate-180" : "" // Gira o ícone quando aberto
            } transition-transform`}
          />
        </button>
        <div className="flex flex-col px-6">
          <motion.div
            variants={inputControll}
            animate={itensSurge ? "open" : "close"}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0 }}
            onAnimationComplete={(e) => {
              if (e == "close") setIsOpen(false);
            }}
            className="mt-16 flex w-full h-[28]"
          >
            <input
              type="text"
              className="border-[1px] border-[#fcfcfc] bg-[#fff] rounded-l-lg border-r-none outline-none focus:border-r-none w-full h-full text-black px-2 "
            />
            <div className="bg-[#c9c9c9] rounded-l-none rounded-r-lg h-full p-2">
              <FaSearch className="" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Lateralbar;
