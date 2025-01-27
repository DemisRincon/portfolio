import React from "react";
import styled from "styled-components";
import { PageContainer } from "./styled";
import WrapperFadeIn from "./Motion/WrapperFadeIn";

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
`;

const Button = styled.button<{ $bgColor?: string }>`
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme, $bgColor }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 3rem;
  cursor: pointer;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 70%;
`;

const Heading = styled.h1<{ $color?: string }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
  box-sizing: border-box;
  display: block;
  justify-content: start;
  font-size: 10vw;
  width: 100%;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    padding-top: 30px;
  }
`;

const Span = styled.span<{ $color?: string }>`
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
}) => {
  return (
    <PageContainer $isFirstElement={orderInPage === 1} $bgColor={bgColor}>
      <Container>
        <WrapperFadeIn className="full-width">
          <ButtonContainer>
            <Button onClick={() => alert("Button clicked!")}>
              {subHeading}
            </Button>
          </ButtonContainer>
        </WrapperFadeIn>
        <WrapperFadeIn>
          <HeadingContainer>
            <Heading $color={fontColor}>
              {heading} <Span $color={middleHeadColor}>{middleHeading[0]}</Span>{" "}
              {endHeading}
            </Heading>
          </HeadingContainer>
        </WrapperFadeIn>
      </Container>
    </PageContainer>
  );
};

export default HeroWithTitleButton;
