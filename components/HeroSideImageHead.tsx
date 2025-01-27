import React, { useEffect, useState } from "react";
import { PageContainer } from "./styled";
import WrapperFadeIn from "./Motion/WrapperFadeIn";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import useIsMobile from "@/library/hooks/useIsMobile";
import useParallax from "@/library/hooks/useParallax";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: space-between;
  }
  .full-width {
    width: 100%;
  }
`;

const TextContainer = styled(motion.div)`
  width: 100%;
  height: 50%;
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  max-width: 80%;
  height: auto;
  width: auto;
  max-height: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1<{ $color?: string }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  font-size: 2em;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  text-overflow: clip;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    padding-top: 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    &:after {
      content: "";
      position: absolute;
      bottom: -2.3rem;
      left: 0;
      width: 100%;
      height: 100px;
      background: ${(props) => props.theme.colors.white};
    }
    &:before {
      content: " ";
      position: absolute;
      bottom: 7rem;
      left: 0;
      width: 100%;
      height: 50px;
      background: ${(props) => props.theme.colors.white};
    }
  }
`;

const SubHeading = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.grey};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
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
  const isMobile = useIsMobile();
  const { y: yImage } = useParallax([0, 1], [0, -200]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMiddleHeadingIndex(
        (prevIndex) => (prevIndex + 1) % middleHeading.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [middleHeading.length]);
  console.log(orderInPage);
  return (
    <PageContainer $isFirstElement={orderInPage === 1 ? true : false}>
      <WrapperFadeIn>
        <Container>
          <TextContainer>
            <SubHeading>{subHeading}</SubHeading>
            <Heading>
              {heading}{" "}
              <AnimatePresence mode="wait">
                <Strong
                  key={middleHeadingIndex}
                  initial={{ opacity: 0, y: isMobile ? -10 : -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: isMobile ? 10 : 100 }}
                  transition={{ duration: 0.1, ease: "linear" }}
                >
                  {middleHeading[middleHeadingIndex]}
                </Strong>
              </AnimatePresence>
            </Heading>
          </TextContainer>

          <ImageContainer>
            <ProfileImage src={url} alt="Profile Photo" style={{ y: yImage }} />
          </ImageContainer>
        </Container>
      </WrapperFadeIn>
    </PageContainer>
  );
};

export default HeroSideImageHead;
