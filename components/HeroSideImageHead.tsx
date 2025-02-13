import React, { useEffect, useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import useTransformOnScroll from "../library/hooks/useTransformOnScroll";
import WrapperFadeIn from "./WrapperFadeIn";

interface Image {
  url: string;
}

interface HeroSideImageHeadProps {
  heading: string;
  children: React.ReactNode;
  middleHeading: string[];
  image: Image;
  sliceText?: boolean;
  endHeading?: string;
  isPhoto?: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  width: 95%;
  height: calc(100vh - 80px);
  padding: 0;
  white-space: nowrap;
  text-overflow: clip;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

const TextContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 30%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100%;
    width: 40%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 30%;
  }
`;

const SubHeading = styled.h6`
  color: ${({ theme }) => theme.colors.grey};
  text-align: start;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: justify;
  }
`;

const Heading = styled.h2<{ $sliceText?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  white-space: nowrap;
  text-overflow: clip;
  ${({ $sliceText }) => $sliceText && `flex-direction: column;`}
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 30px;
    text-align: center;

    ${({ $sliceText }) => $sliceText && `text-align: start;`}
  }
`;

const Strong = styled(motion.strong)<{ $sliceText?: boolean }>`
  margin: 0 0.8rem 0 0.8rem;
  ${({ $sliceText }) => $sliceText && `margin: 0;`}
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  max-width: 50vh;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 60%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100%;
    width: 40%;
  }
`;

const ProfileImage = styled(motion.img)<{ $isPhoto?: boolean }>`
  display: inline-block;
  position: relative;
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  object-fit: cover;
  ${({ $isPhoto }) =>
    $isPhoto &&
    `
      border-radius: 50%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `}
`;

/**
 * HeroSideImageHead component displays a heading with animated middle text,
 * a subheading, and an image that scales on scroll.
 *
 * @component
 * @param {HeroSideImageHeadProps} props - The properties for the HeroSideImageHead component.
 * @param {string} props.heading - The main heading text.
 * @param {string} props.subHeading - The subheading text.
 * @param {string[]} props.middleHeading - An array of strings for the animated middle heading text.
 * @param {Object} props.image - The image object containing the URL.
 * @param {string} props.image.url - The URL of the image.
 * @param {boolean} props.sliceText - A flag to determine if the text should be sliced.
 * @param {string} props.endHeading - The ending part of the heading text.
 *
 * @returns {JSX.Element} The rendered HeroSideImageHead component.
 *
 * @example
 * <HeroSideImageHead
 *   heading="Welcome"
 *   subHeading="to my portfolio"
 *   middleHeading={["Developer", "Designer", "Creator"]}
 *   image={{ url: "path/to/image.jpg" }}
 *   sliceText={true}
 *   endHeading="!"
 * />
 *
 * @remarks
 * This component uses `useTransformOnScroll` to scale the image on scroll and `useMemo` to memoize the middle heading text.
 * The middle heading text changes every 3 seconds using `setInterval` and `useEffect`.
 */
interface HeroSideImageHeadComponent extends React.FC<HeroSideImageHeadProps> {
  Subheading: React.FC<{ subHeading: string }>;
}

const HeroSideImageHead: HeroSideImageHeadComponent = ({
  heading,
  children,
  middleHeading,
  image: { url },
  sliceText,
  endHeading,
  isPhoto,
}) => {
  const [middleHeadingIndex, setMiddleHeadingIndex] = useState(0);

  const size = isPhoto ? [0.5, 1.3] : [1, 1.7];

  const { y: yImage, ref } = useTransformOnScroll([0, 1], size);

  const memoizedMiddleHeading = useMemo(() => middleHeading, [middleHeading]);

  const updateMiddleHeadingIndex = useCallback(() => {
    setMiddleHeadingIndex(
      (prevIndex) => (prevIndex + 1) % memoizedMiddleHeading.length
    );
  }, [memoizedMiddleHeading.length]);

  useEffect(() => {
    const interval = setInterval(updateMiddleHeadingIndex, 3000);
    return () => clearInterval(interval);
  }, [updateMiddleHeadingIndex]);

  return (
    <Container ref={ref}>
      <TextContainer>
        {children}
        <WrapperFadeIn>
          <Heading $sliceText={sliceText}>
            {heading}
            <AnimatePresence mode="wait">
              <motion.div
                key={memoizedMiddleHeading[middleHeadingIndex]}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.1 }}
              >
                <Strong $sliceText={sliceText}>
                  {memoizedMiddleHeading[middleHeadingIndex]}
                </Strong>
              </motion.div>
            </AnimatePresence>
            {endHeading}
          </Heading>
        </WrapperFadeIn>
      </TextContainer>

      <ImageContainer>
        <WrapperFadeIn>
          <ProfileImage
            src={url}
            alt="Profile Photo"
            style={{ scale: yImage }}
            $isPhoto={isPhoto}
          />
        </WrapperFadeIn>
      </ImageContainer>
    </Container>
  );
};

HeroSideImageHead.Subheading = ({ subHeading }: { subHeading: string }) => {
  return (
    <WrapperFadeIn>
      <SubHeading>{subHeading}</SubHeading>;
    </WrapperFadeIn>
  );
};

HeroSideImageHead.Subheading.displayName = "HeroSideImageHeadSubheading";

HeroSideImageHead.displayName = "HeroSideImageHead";

export default HeroSideImageHead;
