import React, { useEffect, useState } from "react";
import { PageContainer } from "./styled";
import WrapperFadeIn from "./Motion/WrapperFadeIn";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import useTransformOnScroll from "../library/hooks/useTransformOnScroll";

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

const Heading = styled.h1<{ $color?: string }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
  box-sizing: border-box;
  font-size: 2.3rem;
  width: 100%;
  display: flex;
  white-space: nowrap;
  text-overflow: clip;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    padding-top: 30px;
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
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 70%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100%;
    width: 40%;
  }
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  max-width: 80%;
  height: auto;
  width: auto;
  max-height: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
}

const HeroSideImageHead: React.FC<HeroSideImageHeadProps> = ({
  heading,
  subHeading,
  middleHeading,
  image: { url },
  orderInPage,
}) => {
  const [middleHeadingIndex, setMiddleHeadingIndex] = useState(0);

  const { y: yImage } = useTransformOnScroll([0, 1], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMiddleHeadingIndex(
        (prevIndex) => (prevIndex + 1) % middleHeading.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [middleHeading.length]);

  console.log("HeroSideImageHead", orderInPage === 1);
  return (
    <PageContainer $isFirstElement={orderInPage === 1}>
      <WrapperFadeIn>
        <Container>
          <TextContainer>
            <SubHeading>{subHeading}</SubHeading>
            <Heading>
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
              </AnimatePresence>
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
