import React, { useEffect, useMemo, useState, useCallback } from "react";
import styled from "styled-components";
import { PageContainerAdjusted } from "./styled";
import WrapperFadeIn from "./Motion/WrapperFadeIn";

interface ProfesionalProjectCardProps {
  bgColor: string;
  fontColor: string;
  description?: string[];
  enterprise: string;
  url: string;
  name: string;
  productPhoto: { url: string };
  buttonText?: string;
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 55%;
  }
`;

const ImageContainer = styled.div`
  justify-content: center;
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
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 95%;
  }
`;

const Owner = styled.h3<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `}
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0;
    justify-content: start;
  }
`;

const ProductName = styled.h2<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  text-align: right;
  ${({ color }) =>
    color &&
    `
  color: ${color};
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 95%;
    justify-content: start;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  margin: 2rem 0;
  font-size: 1.5rem;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p<{ color?: string }>`
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `}
  text-align: justify;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0;
  }
`;

const JobFunctions = styled.ul<{ color?: string }>`
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

const JobFunction = styled.li``;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row-reverse;
    align-items: start;
    gap: 2rem;
    width: 95%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 95%;
    justify-content: start;
  }
`;

const ProfesionalProjectCard: React.FC<ProfesionalProjectCardProps> = ({
  bgColor,
  fontColor,
  description,
  enterprise,
  url,
  name,
  productPhoto: { url: productImg },
  buttonText,
}) => {
  const [first, setFirst] = useState<string>("");

  const newArray = useMemo(() => description?.slice(1) || [], [description]);

  useEffect(() => {
    if (description) {
      setFirst(description[0]);
    }
  }, [description]);

  const handleImageClick = useCallback(() => {
    window.open(url, "_blank");
  }, [url]);

  const handleButtonClick = useCallback(() => {
    window.open(url, "_blank");
  }, [url]);

  return (
    <PageContainerAdjusted $bgColor={bgColor}>
      <MainContainer>
        <WrapperFadeIn>
          <ProductName color={fontColor}>{name}</ProductName>
        </WrapperFadeIn>
        <MiddleContainer>
          <ImageContainer onClick={handleImageClick}>
            <WrapperFadeIn>
              <ProductImage src={productImg} alt={name} />
            </WrapperFadeIn>
          </ImageContainer>

          <Container>
            <WrapperFadeIn>
              <Owner color={fontColor}>{enterprise}</Owner>
            </WrapperFadeIn>
            <Description color={fontColor}>{first}</Description>
            <JobFunctions color={fontColor}>
              {newArray.map((item, index) => (
                <JobFunction key={index}>
                  <WrapperFadeIn threshold={0.3}>
                    <Description color={fontColor}>{item}</Description>
                  </WrapperFadeIn>
                </JobFunction>
              ))}
            </JobFunctions>
          </Container>
        </MiddleContainer>

        <WrapperFadeIn>
          <ButtonContainer>
            <Button onClick={handleButtonClick}>{buttonText}</Button>
          </ButtonContainer>
        </WrapperFadeIn>
      </MainContainer>
    </PageContainerAdjusted>
  );
};

export default ProfesionalProjectCard;
