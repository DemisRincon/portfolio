"use client";
import React from "react";
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
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <SpinnerContainer {...containerAnimation} data-testid="spinner">
      <Spinner data-testid="spinner" />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
};

export default Loading;
