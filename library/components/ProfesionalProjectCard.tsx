import React, { useMemo, useCallback } from "react";
import styled from "styled-components";
import WrapperFadeIn from "./WrapperFadeIn";
import { Button } from "./Common";
import useScrollOnView from "../hooks/useScrollOnView";

interface ProfesionalProjectCardProps {
  fontColor: string;
  description?: string[];
  enterprise: string;
  url: string;
  name: string;
  productPhoto: { url: string };
  buttonText?: string;
  title?: string;
}

const MainContainer = styled.div`
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

const ImageWrapper = styled.div`
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

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 95%;
  }
`;

const StyledOwner = styled.h3<{ color?: string }>`
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

const StyledProductName = styled.h2<{ color?: string }>`
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

const StyledDescription = styled.p<{ color?: string }>`
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

const JobFunctionsList = styled.ul<{ color?: string }>`
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
    width: 95%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 95%;
    justify-content: start;
  }
`;

/**
 * `ProfesionalProjectCard` is a memoized functional component that displays a professional project card.
 * It includes the project's name, enterprise, description, and an image. The card also features a button
 * that opens the project's URL in a new tab.
 *
 * @component
 * @param {ProfesionalProjectCardProps} props - The properties passed to the component.
 * @param {string} props.fontColor - The color of the text.
 * @param {string[]} [props.description=[]] - An array of descriptions for the project.
 * @param {string} props.enterprise - The name of the enterprise associated with the project.
 * @param {string} props.url - The URL of the project.
 * @param {string} props.name - The name of the project.
 * @param {Object} props.productPhoto - An object containing the URL of the product image.
 * @param {string} props.productPhoto.url - The URL of the product image.
 * @param {string} props.buttonText - The text displayed on the button.
 * @param {string} props.title - The title of the project card.
 *
 * @returns {JSX.Element} The rendered professional project card component.
 *
 * @example
 * <ProfesionalProjectCard
 *   fontColor="black"
 *   description={["Description 1", "Description 2"]}
 *   enterprise="Enterprise Name"
 *   url="https://example.com"
 *   name="Project Name"
 *   productPhoto={{ url: "https://example.com/image.jpg" }}
 *   buttonText="View Project"
 *   title="Project Title"
 * />
 */
const ProfesionalProjectCard: React.FC<ProfesionalProjectCardProps> =
  React.memo(
    ({
      fontColor,
      description = [],
      enterprise,
      url,
      name,
      productPhoto: { url: productImg },
      buttonText,
      title,
    }) => {
      const target = useScrollOnView();
      const firstDescription = useMemo(
        () => description[0] || "",
        [description]
      );
      const remainingDescriptions = useMemo(
        () => description.slice(1),
        [description]
      );

      const handleImageClick = useCallback(() => {
        window.open(url, "_blank");
      }, [url]);

      const handleButtonClick = useCallback(() => {
        window.open(url, "_blank");
      }, [url]);

      return (
        <MainContainer id={title} ref={target}>
          <WrapperFadeIn>
            <StyledProductName color={fontColor}>{name}</StyledProductName>
          </WrapperFadeIn>
          <MiddleWrapper>
            <ImageWrapper onClick={handleImageClick}>
              <WrapperFadeIn>
                <StyledImage src={productImg} alt={name} />
              </WrapperFadeIn>
            </ImageWrapper>

            <ContentContainer>
              <WrapperFadeIn>
                <StyledOwner color={fontColor}>{enterprise}</StyledOwner>
              </WrapperFadeIn>
              <StyledDescription color={fontColor}>
                {firstDescription}
              </StyledDescription>
              <JobFunctionsList color={fontColor}>
                {remainingDescriptions.map((item, index) => (
                  <JobFunctionItem key={index}>
                    <WrapperFadeIn threshold={0.3}>
                      <StyledDescription color={fontColor}>
                        {item}
                      </StyledDescription>
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
        </MainContainer>
      );
    }
  );

ProfesionalProjectCard.displayName = "ProfesionalProjectCard";

export default ProfesionalProjectCard;
