import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { PageContainerAdjusted, Button } from "./styled";

interface PersonalProjectProps {
  projectName: string;
  details: string;
  technologies: string;
  urlGithub: string;
  urlApp: string;
  bgColor: string;
  fontColor: string;
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
    width: 95%;
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
    width: 50%;
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

const Paragraph = styled.p``;

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

const PersonalProject: React.FC<PersonalProjectProps> = React.memo(
  ({
    projectName,
    details,
    technologies,
    urlGithub,
    urlApp,
    image,
    bgColor,
    fontColor,
  }) => {
    return (
      <PageContainerAdjusted $bgColor={bgColor}>
        <Container $textcolor={fontColor}>
          <ProductName>{projectName}</ProductName>
          <Paragraph>Technologies used: {technologies}</Paragraph>
          <Paragraph>{details}</Paragraph>
          <ImageContainer onClick={() => window.open(urlApp, "_blank")}>
            <ProductImage src={image.url} alt={projectName} />
          </ImageContainer>
          <ButtonsContainer>
            <Button
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                },
              }}
              onClick={() => window.open(urlGithub, "_blank")}
            >
              <FaGithub size={32} />
              Github
            </Button>
            <Button
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                },
              }}
              onClick={() => window.open(urlApp, "_blank")}
            >
              <MdWeb size={32} />
              App
            </Button>
          </ButtonsContainer>
        </Container>
      </PageContainerAdjusted>
    );
  }
);

export default PersonalProject;
