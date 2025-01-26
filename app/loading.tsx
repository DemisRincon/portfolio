"use client";
import { FC } from "react";
import { motion } from "motion/react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  overflow: hidden;
`;

const Spinner = styled(motion.div)`
  border: 16px solid ${(props) => props.theme.colors.lightGrey};
  border-top: 16px solid ${(props) => props.theme.colors.teal};
  border-radius: 50%;
  width: 120px;
  height: 120px;
`;

const LoadingText = styled.h1`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.teal};
  font-size: 5rem;
  letter-spacing: 0.5rem;
`;

const Loading: FC = () => {
  return (
    <SpinnerContainer>
      <Spinner
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      <LoadingText>Loading...</LoadingText>
    </SpinnerContainer>
  );
};

export default Loading;
