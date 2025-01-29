import React from "react";
import { PageContainerAdjusted } from "./styled";
import Modal from "react-modal";

import styled from "styled-components";
import ModalImage from "./ModalImage";

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

const MainContainer = styled.div<{ $bgColor: string; $fontColor: string }>`
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
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Owner = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`;

const ProductName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
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
`;
const Description = styled.p`
  color: ${({ color }) => color};
`;

const JobFunctions = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const JobFunction = styled.li``;

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
      <PageContainerAdjusted>
        <MainContainer $bgColor={bgColor} $fontColor={fontColor}>
          <ProductName>{name}</ProductName>
          <Owner>{enterprise}</Owner>
          <ModalImage productImg={productImg}>
            <ImageContainer>
              <ProductImage src={productImg} alt={name} />
            </ImageContainer>
          </ModalImage>
          <Container>
            <InfoContainer>
              <Description color={fontColor}>{first}</Description>
              <JobFunctions>
                {newArray.map((item, index) => (
                  <JobFunction key={index}>
                    <Description color={fontColor}>{item}</Description>
                  </JobFunction>
                ))}
              </JobFunctions>
              <Button onClick={() => (window.location.href = url)}>
                {buttonText}
              </Button>
            </InfoContainer>
          </Container>
        </MainContainer>
      </PageContainerAdjusted>
    </>
  );
};
Modal.setAppElement("#__next"); // or the appropriate root element of your app

export default ProfesionalProjectCard;
