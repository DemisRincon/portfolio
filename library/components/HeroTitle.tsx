import React from "react";
import styled from "styled-components";
import { Button } from "./Common";
import { motion } from "framer-motion";
import useTransformOnScroll from "../hooks/useTransformOnScroll";
import WrapperFadeIn from "./WrapperFadeIn";

interface ButtonProps {
  text: string;
  bgColor: string;
  url: string;
  color: string;
}

interface HeroWithTitleButtonProps {
  heading: string;
  middleHeading: string[];
  middleHeadColor?: string;
  endHeading: string;
  button: ButtonProps;
  children?: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 6rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 50%;
  }
`;

const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const Heading = styled.h2`
  display: inline-block;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 70%;
  }
`;

const Strong = styled(motion.strong)`
  cursor: pointer;
`;

const HeroTitle: React.FC<HeroWithTitleButtonProps> & {
  Button: React.FC<ButtonProps>;
} = ({ heading, middleHeading, endHeading, button, children }) => {
  const { y: scale, ref } = useTransformOnScroll([0, 0.7, 1], [0.5, 1, 1]);

  return (
    <Container ref={ref}>
      <HeadingContainer style={{ scale }}>
        <WrapperFadeIn>
          <Heading>
            {heading}{" "}
            <Strong onClick={() => (window.location.href = button.url)}>
              {middleHeading[0]}
            </Strong>{" "}
            {endHeading}
          </Heading>
        </WrapperFadeIn>
      </HeadingContainer>
      {children}
    </Container>
  );
};

HeroTitle.Button = ({ text, bgColor, url, color }) => (
  <ButtonContainer>
    <WrapperFadeIn transition={{ duration: 0.6, delay: 0.4 }}>
      <Button
        onClick={() => (window.location.href = url)}
        $bgColor={bgColor}
        $color={color}
        whileHover={{ scale: 1.2, cursor: "pointer" }}
        whileTap={{ scale: 0.8 }}
        title={`Click to go to ${text}`}
      >
        {text}
      </Button>
    </WrapperFadeIn>
  </ButtonContainer>
);

HeroTitle.displayName = "HeroTitle";
HeroTitle.Button.displayName = "HeroTitleButton";

export default HeroTitle;
