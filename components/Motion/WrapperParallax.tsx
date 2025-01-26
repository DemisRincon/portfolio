"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
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
}

const ParallaxWrapper: FC<ParallaxWrapperProps> = ({
  children,
  className,
  givenRef,
}) => {
  const ref = useRef<HTMLDivElement>(null!);
  const [newRef, setNewRef] = useState<React.RefObject<HTMLDivElement> | null>(
    null
  );
  const { scrollYProgress } = useScroll({
    target: givenRef ?? ref,
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);

  useEffect(() => {
    if (givenRef) {
      return setNewRef(givenRef);
    }
    setNewRef(ref);
  }, [givenRef]);
  if (!newRef) return null;
  return (
    <Container className={className}>
      <ParallaxDiv ref={newRef} style={{ y }}>
        {children}
      </ParallaxDiv>
    </Container>
  );
};

export default ParallaxWrapper;
