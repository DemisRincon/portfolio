"use client";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const useTransformOnScroll = (array1 = [0, 1], array2 = [0, 400]) => {
  const ref = useRef<HTMLDivElement>(null);
  if (!ref.current) {
    ref.current = null;
  }
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, array1, array2);
  return { ref, y };
};

export default useTransformOnScroll;
