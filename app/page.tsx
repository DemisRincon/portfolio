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
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
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
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 500px;
    height: 500px;
  }
`;

const Heading = styled.h1`
  color: #333;
  margin-bottom: 10px;
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  color: #666;
`;

const data = {
  heading: "I'm a ",
  endHeading: [
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
                  <strong>{data.endHeading[0]}</strong>
                </Heading>
              </WrapperFadeIn>
            </ParallaxWrapper>
          </TextContainer>
          <ParallaxWrapper start="50%">
            <ProfileImage src={data.photo} alt="Profile Photo" />
          </ParallaxWrapper>
        </Container>
      </PageContainer>
      <PageContainer></PageContainer>
      <PageContainer></PageContainer>
      <PageContainer></PageContainer>
      <PageContainer></PageContainer>
      <PageContainer></PageContainer>
    </>
  );
};

export default Home;
