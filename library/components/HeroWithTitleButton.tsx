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
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: 0;
  box-sizing: border-box;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
  .full-width {
    width: 100%;
    height: 100%;
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
  box-sizing: border-box;
  width: 90%;
  height: 80%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 50%;
  }
`;

const Heading = styled.h1`
  box-sizing: border-box;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  max-width: 100%;
  text-overflow: ellipsis;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
  }
`;

const Span = styled(motion.span)``;

const HeroWithTitleButton: React.FC<HeroWithTitleButtonProps> = ({
  heading,
  subHeading,
  middleHeading,
  endHeading,
  button,
}) => {
  const { y: scale } = useTransformOnScroll([0, 0.7, 1], [1, 1.4, 1]);

  const handleClick = useCallback(() => {
    window.location.href = button.url;
  }, [button.url]);

  return (
    <Container>
      {button.text && (
        <ButtonContainer>
          <WrapperFadeIn className="full-width">
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
          </WrapperFadeIn>
        </ButtonContainer>
      )}
      <HeadingContainer style={{ scale: scale }}>
        <WrapperFadeIn>
          <Heading>
            {heading}{" "}
            <Span
              title={`Click to go to ${button.text}`}
              whileHover={{ scale: 1.3, y: 20, cursor: "pointer" }}
            >
              {middleHeading[0]}
            </Span>{" "}
            {endHeading}
          </Heading>
        </WrapperFadeIn>
      </HeadingContainer>
    </Container>
  );
};

export default React.memo(HeroWithTitleButton);
