import React from "react";
import { PageContainer, PageContainerAdjusted } from "./styled";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
interface PersonalProjectProps {
  projectName: string;
  details: string;
  technologies: string[];
  urlgithub: string;
  urlapp: string;
  image: {
    url: string;
  };
}

const Container = styled.div<{ $textcolor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  color: ${({ theme, $textcolor }) => theme.colors[$textcolor || "white"]};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
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
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  gap: 1rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.2rem;
  }
`;

const PersonalProject: React.FC<PersonalProjectProps> = ({
  projectName,
  details,
  technologies,
  urlgithub,
  urlapp,
  image,
}) => {
  console.log(projectName, details, technologies, urlgithub, urlapp, image);
  return (
    <PageContainerAdjusted $bgColor="grey">
      <Container $textcolor="white">
        <h2>{projectName}</h2>
        <Paragraph>Technologies used: {technologies}</Paragraph>
        <Paragraph>{details}</Paragraph>
        <ImageContainer onClick={() => window.open(urlapp, "_blank")}>
          <ProductImage src={image.url} alt={projectName} />
        </ImageContainer>
        <ButtonsContainer>
          <Button onClick={() => window.open(urlgithub, "_blank")}>
            <FaGithub size={32} />
            Github
          </Button>
          <Button onClick={() => window.open(urlapp, "_blank")}>
            <MdWeb size={32} />
            App
          </Button>
        </ButtonsContainer>
      </Container>
    </PageContainerAdjusted>
  );
};

export default PersonalProject;
