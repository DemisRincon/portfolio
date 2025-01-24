import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  start?: string;
  end?: string;
}

const ParallaxWrapper = ({
  children,
  start = "10%",
  end = "-10%",
}: ParallaxWrapperProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [start, end]);

  return (
    <motion.div ref={ref} style={{ translateY }}>
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
