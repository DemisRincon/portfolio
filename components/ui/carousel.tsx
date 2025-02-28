import { AnimatePresence } from "motion/react";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselProps {
  handleNext: () => void;
  handlePrev: () => void;
  list: { image: { url?: string }; title: string }[];
  index: number;
  children: React.ReactNode;
}

const Carousel: FC<CarouselProps> = ({
  handleNext,
  handlePrev,
  list,
  index,
  children,
}) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="relative h-64 md:h-96 w-full mt-6">
            <Image
              src={list[index].image.url || "/placeholder.svg"}
              alt={list[index].title}
              fill
              className="object-scale-down"
            />
          </div>
          {children}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary dark:bg-gray-800 p-2 rounded-full shadow-lg text-white hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary dark:bg-gray-800 p-2 rounded-full shadow-lg text-white hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-200"
        aria-label="Next project"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Carousel;
