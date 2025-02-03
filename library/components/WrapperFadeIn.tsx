import React, { useEffect, ReactNode, useCallback, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "motion/react";
import useIsMobile from "@/library/hooks/useIsMobile";
import styled from "styled-components";

const MotionDiv = styled(motion.div)`
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

/**
 * A React functional component that provides a fade-in animation effect for its children.
 * The animation is triggered when the component comes into view.
 *
 * @component
 * @param {React.ReactNode} children - The content to be wrapped by the fade-in animation.
 * @param {number} [delay=0.1] - The delay before the animation starts, in seconds.
 * @param {boolean} [conditionWrapper] - A condition to determine whether to apply the wrapper.
 * @param {string} [className] - Additional CSS class names to apply to the component.
 * @param {number} [threshold=0.1] - The threshold for the intersection observer, determining when the animation should start.
 * @param {any} [refreshKey] - A key to refresh the animation.
 * @param {boolean} [fromTop=false] - A flag to determine if the animation should start from the top.
 *
 * @returns {JSX.Element} The wrapped children with the fade-in animation applied.
 *
 * @example
 * <WrapperFadeIn delay={0.2} fromTop={true}>
 *   <div>Your content here</div>
 * </WrapperFadeIn>
 */
const WrapperFadeIn: React.FC<WrapperFadeInProps> = ({
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

  const startAnimation = useCallback((): void => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation, refreshKey]);

  const variants = useMemo(
    () => ({
      visible: {
        opacity: 1,
        y: 0,
      },
      hidden: { opacity: 0, y: fromTop ? -40 : 40 },
    }),
    [fromTop]
  );

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
      variants={variants}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

export default React.memo(WrapperFadeIn);
