"use client";
import { useEffect, useMemo, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import React from "react";

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

const WrapperFadeIn: React.FC<IWrapperFadeInProps> = React.memo(
  function WrapperFadeIn({
    children,
    conditionWrapper = true,
    className,
    threshold = 0.1,
    refreshKey,
    fromTop = true,
    transition = { duration: 0.6, delay: 0.1 },
  }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold });

    const startAnimation = useCallback(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

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
      <MemoizedStyledWrapper
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={transition}
        variants={variants}
        className={className}
      >
        {children}
      </MemoizedStyledWrapper>
    );
  }
);

const StyledWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  width: 100%;
`;

const MemoizedStyledWrapper = React.memo(StyledWrapper);

export default WrapperFadeIn;
