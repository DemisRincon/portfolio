"use client";
import { Spinner, SpinnerContainer, LoadingText } from "./styles";

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
