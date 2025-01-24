"use client";
import { PageContainer } from "@/components/styled";
import WrapperFadeIn from "@/components/WrapperFadeIn";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 80%;
  padding: 20px;
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
`;

const Heading = styled.h1`
  font-size: 2.5rem;
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    ["50%", "-50%"]
  );

  return (
    <>
      <PageContainer>
        <Container ref={ref}>
          <TextContainer>
            <SubHeading>{data.subHeading}</SubHeading>
            <Heading>
              {data.heading}
              <strong>{data.endHeading[0]}</strong>
            </Heading>
          </TextContainer>

          <ProfileImage
            src={data.photo}
            alt="Profile Photo"
            style={{ translateY: translateY }}
          />
        </Container>
      </PageContainer>
    </>
  );
};

export default Home;
