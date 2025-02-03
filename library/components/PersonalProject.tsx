import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { Button } from "./Common";

interface PersonalProjectProps {
  projectName: string;
  details: string;
  technologies: string;
  urlGithub: string;
  urlApp: string;
  image: {
    url: string;
  };
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;

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

/**
 * `PersonalProject` is a memoized functional component that displays information about a personal project.
 * It includes the project name, details, technologies used, and links to the project's GitHub repository and live application.
 * The component also displays an image related to the project, which can be clicked to open the live application.
 *
 * @component
 * @param {PersonalProjectProps} props - The properties passed to the component.
 * @param {string} props.projectName - The name of the project.
 * @param {string} props.details - A brief description of the project.
 * @param {string} props.technologies - The technologies used in the project.
 * @param {string} props.urlGithub - The URL to the project's GitHub repository.
 * @param {string} props.urlApp - The URL to the live application of the project.
 * @param {Object} props.image - The image object related to the project.
 * @param {string} props.image.url - The URL of the image.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <PersonalProject
 *   projectName="My Project"
 *   details="This is a sample project."
 *   technologies="React, TypeScript"
 *   urlGithub="https://github.com/myproject"
 *   urlApp="https://myproject.com"
 *   image={{ url: "https://myproject.com/image.png" }}
 * />
 */
const PersonalProject: React.FC<PersonalProjectProps> = React.memo(
  ({ projectName, details, technologies, urlGithub, urlApp, image }) => {
    const handleImageClick = () => window.open(urlApp, "_blank");
    const handleGithubClick = () => window.open(urlGithub, "_blank");
    const handleAppClick = () => window.open(urlApp, "_blank");

    console.log("PersonalProject render", image.url);
    return (
      <Container>
        <header>
          <ProductName>{projectName}</ProductName>
        </header>
        <Paragraph>Technologies used: {technologies}</Paragraph>
        <Paragraph>{details}</Paragraph>

        <ImageContainer onClick={handleImageClick}>
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
            onClick={handleGithubClick}
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
            onClick={handleAppClick}
          >
            <MdWeb size={32} />
            App
          </Button>
        </ButtonsContainer>
      </Container>
    );
  }
);

PersonalProject.displayName = "PersonalProject";

export default PersonalProject;
