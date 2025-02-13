import React from "react";
import styled from "styled-components";
import WrapperFadeIn from "./WrapperFadeIn";
import { Button } from "./Common";
import useScrollOnView from "../library/hooks/useScrollOnView";
import useTransformOnScroll from "../library/hooks/useTransformOnScroll";
import { motion } from "motion/react";

interface ProfessionalProjectCardProps {
  description?: string[];
  enterprise: string;
  url: string;
  name: string;
  productPhoto: { url: string };
  buttonText?: string;
  title?: string;
}

const MainContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 95%;
`;

const Container = styled(MainContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 55%;
  }
`;

const ImageWrapper = styled.div`
  justify-content: end;
  align-items: start;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 45%;
    height: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 95%;
  }
`;

const StyledOwner = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0;
    justify-content: start;
  }
`;

const StyledProductName = styled.h2`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  text-align: left;
  margin: 1rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: justify;
    justify-content: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
    justify-content: start;
  }
`;

const StyledDescription = styled.p``;

const JobFunctionsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `}
  padding-left: 1.1rem;
`;

const JobFunctionItem = styled.li``;

const MiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row-reverse;
    align-items: start;
    gap: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: start;
  }
`;

const ProfessionalProjectCard: React.FC<ProfessionalProjectCardProps> = ({
  description = [],
  enterprise,
  url,
  name,
  productPhoto: { url: productImg },
  buttonText,
  title,
}) => {
  const target = useScrollOnView();
  const { y: scale, ref } = useTransformOnScroll([0, 0.5, 1], [0.6, 1, 1]);

  const firstDescription = description[0] || "";
  const remainingDescriptions = description.slice(1);

  const handleImageClick = () => {
    window.open(url, "_blank");
  };

  const handleButtonClick = () => {
    window.open(url, "_blank");
  };

  return (
    <MainContainer id={title} ref={target} style={{ scale }}>
      <Container ref={ref}>
        <WrapperFadeIn>
          <StyledProductName>{name}</StyledProductName>
        </WrapperFadeIn>

        <MiddleWrapper>
          <ImageWrapper onClick={handleImageClick}>
            <WrapperFadeIn>
              <StyledImage src={productImg} alt={name} />
            </WrapperFadeIn>
          </ImageWrapper>
          <ContentContainer>
            <WrapperFadeIn>
              <StyledOwner>
                <strong>{enterprise}</strong>
              </StyledOwner>
            </WrapperFadeIn>
            <StyledDescription>{firstDescription}</StyledDescription>
            <JobFunctionsList>
              {remainingDescriptions.map((item, index) => (
                <JobFunctionItem key={index}>
                  <WrapperFadeIn
                    threshold={0.3}
                    transition={{
                      duration: 0.6,
                      delay: (index + 1) * 0.15,
                    }}
                  >
                    <StyledDescription>{item}</StyledDescription>
                  </WrapperFadeIn>
                </JobFunctionItem>
              ))}
            </JobFunctionsList>
          </ContentContainer>
        </MiddleWrapper>

        <WrapperFadeIn>
          <ButtonWrapper>
            <Button
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                },
              }}
              onClick={handleButtonClick}
            >
              {buttonText}
            </Button>
          </ButtonWrapper>
        </WrapperFadeIn>
      </Container>
    </MainContainer>
  );
};

ProfessionalProjectCard.displayName = "ProfessionalProjectCard";

export default ProfessionalProjectCard;
