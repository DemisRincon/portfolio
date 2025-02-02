import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "./Common";
import { motion } from "framer-motion";
import useTransformOnScroll from "../hooks/useTransformOnScroll";
import WrapperFadeIn from "./WrapperFadeIn";

interface HeroWithTitleButtonProps {
  heading: string;
  subHeading: string;
  middleHeading: string[];
  middleHeadColor?: string;
  endHeading: string;
  button: { text: string; bgColor: string; url: string; color: string };
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  height: 100%;
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
  width: 90%;
`;

const Heading = styled.h2`
  display: inline-block;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
  }
`;

const HeroWithTitleButton: React.FC<HeroWithTitleButtonProps> = ({
  heading,
  subHeading,
  middleHeading,
  endHeading,
  button,
}) => {
  console.log("HeroWithTitleButton", middleHeading[0]);
  const { y: scale } = useTransformOnScroll([0, 0.7, 1], [0.5, 1.1, 1.2]);

  const handleClick = useCallback(() => {
    window.location.href = button.url;
  }, [button.url]);

  return (
    <Container>
      <HeadingContainer style={{ scale: scale }}>
        <Heading>
          {heading}
          {` `} <span>{middleHeading[0]}</span>
          {` `}
          {endHeading}
        </Heading>
      </HeadingContainer>
      <ButtonContainer>
        <WrapperFadeIn className="full-width">
          {button.text && (
            <Button
              onClick={handleClick}
              $bgColor={button.bgColor}
              $color={button.color}
              whileHover={{ scale: 1.2, cursor: "pointer" }}
              whileTap={{ scale: 0.8 }}
              title={`Click to go to ${subHeading}`}
              style={{ y: scale }}
            >
              {button.text}
            </Button>
          )}
        </WrapperFadeIn>
      </ButtonContainer>
    </Container>
  );
};

export default React.memo(HeroWithTitleButton);
