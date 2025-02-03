"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  overflow: hidden;
`;

/**
 * A styled `div` component that represents a spinner for loading states.
 *
 * The spinner is styled with a border and an animation to create a rotating effect.
 * The border color and size are determined by the theme properties.
 *
 * @component
 * @example
 * // Usage example:
 * <Spinner />
 *
 * @styled
 * @property {Object} theme - The theme object provided by the ThemeProvider.
 * @property {Object} theme.colors - The colors object within the theme.
 * @property {string} theme.colors.lightGrey - The color used for the spinner's border.
 * @property {string} theme.colors.teal - The color used for the spinner's border-top.
 * @property {Object} theme.breakpoints - The breakpoints object within the theme.
 * @property {string} theme.breakpoints.md - The medium breakpoint value.
 *
 * @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
 *   width: 120px;
 *   height: 120px;
 * }
 *
 * @animation {keyframes} spinnerAnimation - The keyframes animation for the spinner rotation.
 */
export const Spinner = styled.div`
  border: 16px solid ${(props) => props.theme.colors.lightGrey};
  border-top: 16px solid ${(props) => props.theme.colors.teal};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spinnerAnimation} 2s linear infinite;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 120px;
    height: 120px;
  }
`;

export const LoadingText = styled.h1`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.teal};
  letter-spacing: 0.5rem;
`;

const Loading = () => {
  const containerAnimation = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    }),
    []
  );

  return (
    <SpinnerContainer {...containerAnimation}>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
};

export default React.memo(Loading, () => true);
