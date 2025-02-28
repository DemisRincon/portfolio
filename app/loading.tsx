"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center h-screen absolute inset-0 w-full bg-white z-50 overflow-hidden"
      {...containerAnimation}
      data-testid="spinner"
    >
      <div
        className="border-8 border-lightGrey border-t-teal rounded-full w-20 h-20 md:w-30 md:h-30 animate-spin"
        data-testid="spinner"
      />
      <h1 className="mt-5 text-teal tracking-widest">Loading...</h1>
    </motion.div>
  );
};

export default Loading;
