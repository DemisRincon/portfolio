"use client";
import WrapperFadeIn from "@/components/Motion/WrapperFadeIn";
import ParallaxWrapper from "@/components/Motion/WrapperParallax";
import { PageContainer } from "@/components/styled";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  height: 100vh;
  width: 80%;
  padding: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  margin-right: 40px;
  max-width: 500px;
`;

const ProfileImage = styled(motion.img)`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 500px;
    height: 500px;
  }
`;

const Heading = styled.h1<{ $color?: string }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
  box-sizing: border-box;
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

const data = {
  heading: "I'm a ",
  middleHeading: [
    "software engineer",
    "software developer",
    "web developer",
    "full stack developer",
    "front end developer",
    "back end developer",
    "mobile developer",
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
  return (
    <>
      <PageContainer>
        <Container>
          <TextContainer>
            <ParallaxWrapper end="50%">
              <WrapperFadeIn>
                <SubHeading>{data.subHeading}</SubHeading>
                <Heading>
                  {data.heading}
                  <strong>{data.middleHeading[0]}</strong>
                </Heading>
              </WrapperFadeIn>
            </ParallaxWrapper>
          </TextContainer>
          <ParallaxWrapper start="50%">
            <WrapperFadeIn>
              <ProfileImage src={data.photo} alt="Profile Photo" />
            </WrapperFadeIn>
          </ParallaxWrapper>
        </Container>
      </PageContainer>
      <PageContainer $bgColor="teal">
        <Container>
          <WrapperFadeIn>
            <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
          </WrapperFadeIn>
          <WrapperFadeIn>
            <Heading $color="white">
              {data2.heading}
              <strong>{data2.middleHeading}</strong>
              {data2.endHeading}
            </Heading>
          </WrapperFadeIn>
        </Container>
      </PageContainer>
      <PageContainer></PageContainer>
      <PageContainer></PageContainer>
      <PageContainer></PageContainer>
      <PageContainer></PageContainer>
    </>
  );
};

export default Home;
