"use client"; // Ensure this component is rendered on the client side

import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const SpinnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Spinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 5px solid ${(props) => props.theme.colors.teal};
  border-top: 5px solid transparent;
  border-radius: 50%;
`;

const LoadingText = styled.h1`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.teal};
  font-size: 5rem;
  letter-spacing: 0.5rem;
`;

const Loading: FC = () => {
  return (
    <AnimatePresence>
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
    </AnimatePresence>
  );
};

export default Loading;
