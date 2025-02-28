"use client";
import { useEffect, useMemo, useCallback, memo } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export interface IWrapperFadeInProps {
  children?: React.ReactNode;
  delay?: number;
  conditionWrapper?: boolean;
  className?: string;
  threshold?: number;
  refreshKey?: unknown;
  fromTop?: boolean;
  transition?: { duration: number; delay: number };
}

const WrapperFadeIn: React.FC<IWrapperFadeInProps> = memo(
  function WrapperFadeIn({
    children,
    conditionWrapper = true,
    className,
    threshold = 0.1,
    refreshKey,
    fromTop = true,
    transition = { duration: 0.6, delay: 0.1 },
    delay = 0,
  }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold });

    const startAnimation = useCallback(() => {
      if (inView) {
        setTimeout(() => {
          controls.start("visible");
        }, delay);
      }
    }, [controls, inView, delay]);

    useEffect(() => {
      startAnimation();
    }, [startAnimation, refreshKey]);

    const variants = useMemo(
      () => ({
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: fromTop ? 40 : -40 },
      }),
      [fromTop]
    );

    if (!conditionWrapper) {
      return <>{children}</>;
    }

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={transition}
        variants={variants}
        className={`${className}`}
      >
        {children}
      </motion.div>
    );
  }
);

export default WrapperFadeIn;
