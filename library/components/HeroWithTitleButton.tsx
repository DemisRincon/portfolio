import React from "react";
import styled from "styled-components";
import { PageContainer, Button } from "./Common";
import { motion } from "framer-motion";
import useTransformOnScroll from "../hooks/useTransformOnScroll";
import WrapperFadeIn from "./WrapperFadeIn";

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

const Heading = styled.h1<{ $color?: string }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
  box-sizing: border-box;
  font-size: 3.5rem;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  max-width: 100%;
  text-overflow: ellipsis;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4rem;
    padding-top: 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 5rem;
  }
`;

const Span = styled(motion.span)<{ $color?: string }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
`;

interface HeroWithTitleButtonProps {
  heading: string;
  subHeading: string;
  middleHeading: string[];
  bgColor?: string;
  fontColor?: string;
  middleHeadColor?: string;
  endHeading: string;
  orderInPage: number;
  button: { text: string; bgColor: string; url: string; color: string };
}

const HeroWithTitleButton: React.FC<HeroWithTitleButtonProps> = ({
  heading,
  subHeading,
  middleHeading,
  bgColor,
  fontColor,
  middleHeadColor,
  endHeading,
  orderInPage,
  button,
}) => {
  const { y: scale } = useTransformOnScroll([0, 0.7, 1], [1, 1.4, 1]);

  return (
    <PageContainer $isFirstElement={orderInPage === 1} $bgColor={bgColor}>
      <Container>
        {button.text && (
          <ButtonContainer>
            <WrapperFadeIn className="full-width">
              <Button
                onClick={() => (window.location.href = button.url)}
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
            <Heading $color={fontColor}>
              {heading}{" "}
              <Span
                title={`Click to go to ${button.text}`}
                whileHover={{ scale: 1.3, y: 20, cursor: "pointer" }}
                $color={middleHeadColor}
              >
                {middleHeading[0]}
              </Span>{" "}
              {endHeading}
            </Heading>
          </WrapperFadeIn>
        </HeadingContainer>
      </Container>
    </PageContainer>
  );
};

export default HeroWithTitleButton;
