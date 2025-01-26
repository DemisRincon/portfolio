import { useScroll, motion, useTransform } from "motion/react";
import { useRef, ReactNode, FC } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  start?: string;
  end?: string;
  className?: string;
}

const ParallaxWrapper: FC<ParallaxWrapperProps> = ({
  children,
  start = "10%",
  end = "-10%",
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, "300%"], [0, -100]);

  return (
    <motion.div className={className} ref={ref} style={{ translateY }}>
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
