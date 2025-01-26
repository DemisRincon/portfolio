"use client";
import WrapperFadeIn from "@/components/Motion/WrapperFadeIn";
import ParallaxWrapper from "@/components/Motion/WrapperParallax";
import { PageContainer } from "@/components/styled";
import useParallax from "@/hooks/useParallax";
import withClientValidation from "@/library/hoc/ClientComponent";
import useIsMobile from "@/library/hooks/useIsMobile";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: space-between;
  }
  .full-width {
    width: 100%;
  }
`;

const TextContainer = styled(motion.div)`
  width: 100%;
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  max-width: 80vw;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 400px;
    height: 400px;
  }
`;

const Heading = styled.h1<{ $color?: string }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  font-size: 10vw;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  text-overflow: clip;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    padding-top: 30px;
    &:after {
      content: "";
      /* position: absolute; */
      bottom: -2.3rem;
      left: 0;
      width: 100%;
      height: 100px;
      background: ${(props) => props.theme.colors.white};
    }
    &:before {
      content: " ";
      /* position: absolute; */
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
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2rem;
  cursor: pointer;
`;

const Strong = styled(motion.strong)`
  margin: 0 0 0 0.5rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const data = {
  heading: "I'm a ",
  middleHeading: [
    " software engineer",
    " software developer",
    " web developer",
    " full stack developer",
    " front end developer",
    " back end developer",
    " mobile developer",
  ],
  subHeading: "This is my portfolio",
  photo: "/photo.jpg",
};

const data2 = {
  heading: "Come on all, take a look at the ",
  middleHeading: "projects",
  endHeading: " I have been involved in.",
  subHeading: "Projects",
};
const Home = () => {
  const [middleHeadingIndex, setMiddleHeadingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMiddleHeadingIndex(
        (prevIndex) => (prevIndex + 1) % data.middleHeading.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const isMobile = useIsMobile();
  const { y: yImage } = useParallax([0, 1], [0, -200]);
  const { y: yText } = useParallax([0, 1], [0, -400]);

  return (
    <>
      <PageContainer>
        <WrapperFadeIn className="full-width">
          <Container>
            <TextContainer style={{ y: yText }}>
              <SubHeading>{data.subHeading}</SubHeading>
              <Heading>
                {data.heading}{" "}
                <AnimatePresence mode="wait">
                  <Strong
                    key={data.middleHeading[middleHeadingIndex]}
                    initial={{ opacity: 0, y: isMobile ? -10 : -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: isMobile ? 10 : 100 }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  >
                    {data.middleHeading[middleHeadingIndex]}
                  </Strong>
                </AnimatePresence>
              </Heading>
            </TextContainer>

            {/* <ParallaxWrapper givenRef={givenRef}> */}
            <ImageContainer>
              <ProfileImage
                src={data.photo}
                alt="Profile Photo"
                style={{ y: yImage }}
              />
            </ImageContainer>
            {/* </ParallaxWrapper> */}
          </Container>
        </WrapperFadeIn>
      </PageContainer>
      <PageContainer $bgColor="teal">
        <Container>
          <WrapperFadeIn>
            <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
          </WrapperFadeIn>
          <WrapperFadeIn>
            <Heading $color="white"></Heading>
          </WrapperFadeIn>
        </Container>
      </PageContainer>
    </>
  );
};

export default withClientValidation(Home);
