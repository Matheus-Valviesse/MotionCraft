"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // Importação corrigida

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Lateralbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar abertura

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev); // Alterna entre aberto e fechado
  };

  return (
    <motion.div
      className="absolute w-[50px] h-full bg-[#ffffff] shadow-xl rounded-r-md z-100"
      animate={{ width: isOpen ? 300 : 50 }} // Alterna a largura
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full absolute z-100">
        <button
          onClick={toggleSidebar} // Chama a função ao clicar
          className="cursor-pointer right-0 mr-1 mt-1 absolute p-4 rounded-full"
        >
          <MdOutlineArrowForwardIos
            className={`text-black text-[20px] ${
              isOpen ? "rotate-180" : "" // Gira o ícone quando aberto
            } transition-transform`}
          />
        </button>
        <div className="flex flex-col px-6">
          <div className="mt-16 flex w-full h-[28]">
            <input
              type="text"
              className="border-[1px] border-[#696969] bg-[#1d1d1d08] rounded-l-lg border-r-none outline-none focus:border-r-none w-full h-full text-black px-2 "
            />
            <div className="bg-[#1d1d1d] rounded-l-none rounded-r-lg h-full p-2">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Lateralbar;
