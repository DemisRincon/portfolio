import React, { useEffect, useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import useTransformOnScroll from "../hooks/useTransformOnScroll";

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
  height: 50%;
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
  }
`;

const Strong = styled(motion.strong)`
  margin: 0 0 0 0.5rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  max-width: 50vh;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 60%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100%;
    width: 40%;
  }
`;

const ProfileImage = styled(motion.img)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  position: relative;
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
`;

interface Image {
  url: string;
}

interface HeroSideImageHeadProps {
  heading: string;
  subHeading: string;
  middleHeading: string[];
  image: Image;
  sliceText?: boolean;
  endHeading?: string;
}

const HeroSideImageHead: React.FC<HeroSideImageHeadProps> = ({
  heading,
  subHeading,
  middleHeading,
  image: { url },
  sliceText,
  endHeading,
}) => {
  const [middleHeadingIndex, setMiddleHeadingIndex] = useState(0);

  const { y: yImage } = useTransformOnScroll([0, 1], [1, 1.7]);

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
    <Container>
      <TextContainer>
        <SubHeading>{subHeading}</SubHeading>
        <Heading $sliceText={sliceText}>
          {heading}{" "}
          <AnimatePresence mode="wait">
            <motion.div
              key={memoizedMiddleHeading[middleHeadingIndex]}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.1 }}
            >
              <Strong>{memoizedMiddleHeading[middleHeadingIndex]}</Strong>
            </motion.div>
          </AnimatePresence>{" "}
          {endHeading}
        </Heading>
      </TextContainer>

      <ImageContainer>
        <ProfileImage src={url} alt="Profile Photo" style={{ scale: yImage }} />
      </ImageContainer>
    </Container>
  );
};

export default HeroSideImageHead;
