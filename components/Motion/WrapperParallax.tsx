"use client";
import { FC, ReactNode } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ParallaxDiv = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  givenRef?: React.RefObject<HTMLDivElement>;
  array1?: number[];
  array2?: number[];
}

const ParallaxWrapper: FC<ParallaxWrapperProps> = ({
  children,
  className,
  givenRef,
  array1 = [0, 1],
  array2 = [0, 400],
}) => {
  const { scrollYProgress } = useScroll({
    target: givenRef,
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  const y = useTransform(scrollYProgress, array1, array2);

  if (!givenRef) return <>{children}</>;
  return (
    <Container className={className}>
      <ParallaxDiv style={{ y }}>{children}</ParallaxDiv>
    </Container>
  );
};

export default ParallaxWrapper;
