"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

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

const WrapperFadeIn: React.FC<IWrapperFadeInProps> = ({
  children,
  conditionWrapper,
  className,
  threshold = 0.1,
  refreshKey,
  fromTop = true,
  transition = { duration: 0.6, delay: 0.1 },
}) => {
  const controls = useAnimation();

  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView, refreshKey]);

  if (conditionWrapper !== undefined && !conditionWrapper) {
    return <>{children}</>;
  }

  return (
    <Wrapper
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: { opacity: 0, y: fromTop ? 40 : -40 },
      }}
      className={className}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  width: 100%;
`;

export default WrapperFadeIn;
