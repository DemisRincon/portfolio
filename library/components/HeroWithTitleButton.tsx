import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Button } from "./Common";
import { motion } from "framer-motion";
import useTransformOnScroll from "../hooks/useTransformOnScroll";
import WrapperFadeIn from "./WrapperFadeIn";

interface HeroWithTitleButtonProps {
  heading: string;
  subHeading: string;
  middleHeading: string[];
  middleHeadColor?: string;
  endHeading: string;
  button: { text: string; bgColor: string; url: string; color: string };
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 95%;
  height: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 6rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 50%;
  }
`;

const HeadingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const Heading = styled.h2`
  display: inline-block;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 30px;
  }
`;

const Strong = styled(motion.strong)`
  cursor: pointer;
`;

/**
 * A React functional component that renders a hero section with a title and a button.
 *
 * @component
 * @param {HeroWithTitleButtonProps} props - The properties object.
 * @param {string} props.heading - The main heading text.
 * @param {string} props.subHeading - The subheading text.
 * @param {string} props.middleHeading - The middle heading text.
 * @param {string} props.endHeading - The ending heading text.
 * @param {Object} props.button - The button properties.
 * @param {string} props.button.text - The text to display on the button.
 * @param {string} props.button.url - The URL to navigate to when the button is clicked.
 * @param {string} props.button.bgColor - The background color of the button.
 * @param {string} props.button.color - The text color of the button.
 *
 * @returns {JSX.Element} The rendered hero section with a title and a button.
 *
 * @example
 * <HeroWithTitleButton
 *   heading="Welcome"
 *   subHeading="Learn more"
 *   middleHeading="to our"
 *   endHeading="website"
 *   button={{
 *     text: "Click Here",
 *     url: "https://example.com",
 *     bgColor: "one color in the list of colors",
 *     color: "one color in the list of colors"
 *   }}
 * />
 */
const HeroWithTitleButton: React.FC<HeroWithTitleButtonProps> = ({
  heading,
  subHeading,
  middleHeading,
  endHeading,
  button,
}) => {
  const { y: scale } = useTransformOnScroll([0, 0.7, 1], [0.5, 1.1, 1.2]);

  const handleClick = useCallback(() => {
    window.location.href = button.url;
  }, [button.url]);

  const headingStyle = useMemo(() => ({ scale }), [scale]);
  const buttonStyle = useMemo(() => ({ y: scale }), [scale]);

  return (
    <Container>
      <HeadingContainer style={headingStyle}>
        <Heading>
          {heading} <Strong onClick={handleClick}>{middleHeading[0]}</Strong>{" "}
          {endHeading}
        </Heading>
      </HeadingContainer>
      {button.text && (
        <ButtonContainer>
          <WrapperFadeIn className="full-width">
            <Button
              onClick={handleClick}
              $bgColor={button.bgColor}
              $color={button.color}
              whileHover={{ scale: 1.2, cursor: "pointer" }}
              whileTap={{ scale: 0.8 }}
              title={`Click to go to ${subHeading}`}
              style={buttonStyle}
            >
              {button.text}
            </Button>
          </WrapperFadeIn>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default React.memo(HeroWithTitleButton);
