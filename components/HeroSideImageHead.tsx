import React, { useEffect, useState } from "react";
import { PageContainer } from "./styled";
import WrapperFadeIn from "./Motion/WrapperFadeIn";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import useTransformOnScroll from "../library/hooks/useParallax";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  width: 100%;
  min-width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg};
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

const SubHeading = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: justify;
    font-size: 2.2rem;
  }
`;

const Heading = styled.h1<{ $color?: string; $sliceText?: boolean }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
  box-sizing: border-box;
  font-size: 2.3rem;
  width: 100%;
  display: flex;
  white-space: nowrap;
  text-overflow: clip;
  ${({ $sliceText }) => $sliceText && `flex-direction: column;`}
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h1};
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
  orderInPage: number;
  bgColor: string;
  fontColor: string;
  sliceText?: boolean;
  endHeading?: string;
}

const HeroSideImageHead: React.FC<HeroSideImageHeadProps> = ({
  heading,
  subHeading,
  middleHeading,
  image: { url },
  orderInPage,
  bgColor,
  fontColor,
  sliceText,
  endHeading,
}) => {
  const [middleHeadingIndex, setMiddleHeadingIndex] = useState(0);

  const { y: yImage } = useTransformOnScroll([0, 1], [1, 1.7]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMiddleHeadingIndex(
        (prevIndex) => (prevIndex + 1) % middleHeading.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [middleHeading.length]);

  return (
    <PageContainer $bgColor={bgColor} $isFirstElement={orderInPage === 1}>
      <WrapperFadeIn>
        <Container>
          <TextContainer>
            <SubHeading>{subHeading}</SubHeading>
            <Heading $color={fontColor} $sliceText={sliceText}>
              {heading}{" "}
              <AnimatePresence mode="wait">
                <motion.div
                  key={middleHeading[middleHeadingIndex]}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.1 }}
                >
                  <Strong>{middleHeading[middleHeadingIndex]}</Strong>
                </motion.div>
              </AnimatePresence>{" "}
              {endHeading}
            </Heading>
          </TextContainer>

          <ImageContainer>
            <ProfileImage
              src={url}
              alt="Profile Photo"
              style={{ scale: yImage }}
            />
          </ImageContainer>
        </Container>
      </WrapperFadeIn>
    </PageContainer>
  );
};

export default HeroSideImageHead;
