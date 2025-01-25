import { useScroll, motion, useTransform } from "framer-motion";
import { useRef, ReactNode, FC } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  start?: string;
  end?: string;
}

const ParallaxWrapper: FC<ParallaxWrapperProps> = ({
  children,
  start = "10%",
  end = "-10%",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
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
