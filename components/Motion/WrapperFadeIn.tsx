import { useEffect, FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "motion/react";
import useIsMobile from "@/library/hooks/useIsMobile";
import styled from "styled-components";

export const MotionDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
`;

interface WrapperFadeInProps {
  children?: ReactNode;
  delay?: number;
  conditionWrapper?: boolean;
  className?: string;
  threshold?: number;
  refreshKey?: string;
  fromTop?: boolean;
}

const WrapperFadeIn: FC<WrapperFadeInProps> = ({
  children,
  delay = 0.1,
  conditionWrapper,
  className,
  threshold = 0.1,
  refreshKey,
  fromTop = false,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView, refreshKey]);

  if (conditionWrapper !== undefined && !conditionWrapper) {
    return <>{children}</>;
  }

  return (
    <MotionDiv
      ref={ref}
      key={refreshKey}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay: (!isMobile && delay) || 0.1 }}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
        },
        hidden: { opacity: 0, y: fromTop ? -40 : 40 },
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

export default WrapperFadeIn;
