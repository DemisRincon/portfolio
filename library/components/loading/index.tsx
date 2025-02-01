"use client";
import { motion } from "motion/react";
import styled from "styled-components";

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

export const Spinner = styled(motion.div)`
  border: 16px solid ${(props) => props.theme.colors.lightGrey};
  border-top: 16px solid ${(props) => props.theme.colors.teal};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 120px;
    height: 120px;
  }
`;

export const LoadingText = styled.h1`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.teal};
  letter-spacing: 0.5rem;
  font-size: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 5rem;
  }
`;

const Loading = () => {
  return (
    <SpinnerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Spinner
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
};

export default Loading;
