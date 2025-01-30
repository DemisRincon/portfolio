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
  align-items: center;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: start;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    width: 50%;
  }
`;

const ProductName = styled.h2<{ color?: string }>`
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
    width: 50%;
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
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 2rem;
  }
`;
const Description = styled.p`
  color: ${({ color }) => color};
  text-align: justify;
`;

const JobFunctions = styled.ul`
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ color }) => color};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: start;
  }
`;
const JobFunction = styled.li``;

const BottomContainer = styled.div`
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
          <BottomContainer>
            <WrapperFadeIn>
              <ImageContainer>
                <ProductImage src={productImg} alt={name} />
              </ImageContainer>
            </WrapperFadeIn>
            <Container>
              <WrapperFadeIn>
                <Description color={fontColor}>{first}</Description>
              </WrapperFadeIn>
              <WrapperFadeIn>
                <JobFunctions color={fontColor}>
                  {newArray.map((item, index) => (
                    <JobFunction key={index}>
                      <Description color={fontColor}>{item}</Description>
                    </JobFunction>
                  ))}
                </JobFunctions>
              </WrapperFadeIn>
              <WrapperFadeIn>
                <Button onClick={() => (window.location.href = url)}>
                  {buttonText}
                </Button>
              </WrapperFadeIn>
            </Container>
          </BottomContainer>
        </MainContainer>
      </PageContainerAdjusted>
    </>
  );
};

export default ProfesionalProjectCard;
