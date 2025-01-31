import React from "react";
import { PageContainerAdjusted } from "./styled";
import styled from "styled-components";
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
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80%;
    justify-content: start;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: ${({ color }) => color};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.h5};
  margin: 2rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.8rem;
  }
`;
const Description = styled.p`
  color: ${({ color }) => color};
  text-align: justify;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0;
    font-size: 1.2rem;
  }
`;

const JobFunctions = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  color: ${({ color }) => color};
  padding-left: 1.1rem;
`;
const JobFunction = styled.li``;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row-reverse;
    align-items: start;
    gap: 2rem;
    width: 80%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
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
  const [newArray, setNewArray] = React.useState<string[]>([]);
  const [first, setFirst] = React.useState<string>("");
  React.useEffect(() => {
    if (description) {
      setFirst(description[0]);
      const newArray = description.slice(1);
      setNewArray(newArray);
    }
  }, [description]);

  return (
    <>
      <PageContainerAdjusted $bgColor={bgColor}>
        <MainContainer>
          <WrapperFadeIn>
            <ProductName color={fontColor}>{name}</ProductName>
          </WrapperFadeIn>
          <WrapperFadeIn>
            <Owner color={fontColor}>{enterprise}</Owner>{" "}
          </WrapperFadeIn>
          <MiddleContainer>
            <WrapperFadeIn>
              <ImageContainer onClick={() => window.open(url, "_blank")}>
                <ProductImage src={productImg} alt={name} />
              </ImageContainer>
            </WrapperFadeIn>
            <WrapperFadeIn>
              <Container>
                <Description color={fontColor}>{first}</Description>
                <JobFunctions color={fontColor}>
                  {newArray.map((item, index) => (
                    <JobFunction key={index}>
                      <Description color={fontColor}>{item}</Description>
                    </JobFunction>
                  ))}
                </JobFunctions>
              </Container>
            </WrapperFadeIn>
          </MiddleContainer>

          <WrapperFadeIn>
            <ButtonContainer>
              <Button onClick={() => window.open(url, "_blank")}>
                {buttonText}
              </Button>
            </ButtonContainer>
          </WrapperFadeIn>
        </MainContainer>
      </PageContainerAdjusted>
    </>
  );
};

export default ProfesionalProjectCard;
