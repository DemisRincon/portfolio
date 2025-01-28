import React from "react";
import styled from "styled-components";
import { PageContainer } from "./styled";
import WrapperFadeIn from "./Motion/WrapperFadeIn";
import { motion } from "framer-motion";
import useTransformOnScroll from "@/library/hooks/useTransformOnScroll";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: space-between;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 50%;
  }
`;

const Button = styled(motion.button)<{ $bgColor?: string; $color?: string }>`
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  font-size: 3rem;
  height: 100px;
  background-color: ${({ theme, $bgColor }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.black};
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.white};
`;

const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 50%;
  }
`;

const Heading = styled.h1<{ $color?: string }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
  box-sizing: border-box;
  display: block;
  font-size: 4rem;
  width: 100%;
  text-align: left;
  margin: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6rem;
    padding-top: 30px;
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
  const { y: headingScale } = useTransformOnScroll([0, 0.9, 1], [1, 1.2, 0.7]);
  const { y: yButton } = useTransformOnScroll([0, 0.7, 1], [0.5, 0.8, 1]);
  return (
    <PageContainer $isFirstElement={orderInPage === 1} $bgColor={bgColor}>
      <Container>
        <WrapperFadeIn className="full-width">
          <ButtonContainer>
            <Button
              onClick={() => (window.location.href = button.url)}
              $bgColor={button.bgColor}
              $color={button.color}
              whileHover={{ scale: 1.2, cursor: "pointer" }}
              title={`Click to go to ${subHeading}`}
              style={{ y: yButton }}
            >
              {button.text}
            </Button>
          </ButtonContainer>
        </WrapperFadeIn>
        <WrapperFadeIn>
          <HeadingContainer style={{ scale: headingScale }}>
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
          </HeadingContainer>
        </WrapperFadeIn>
      </Container>
    </PageContainer>
  );
};

export default HeroWithTitleButton;
