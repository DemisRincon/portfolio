"use client";
import { PageContainer } from "@/components/styled";
import WrapperFadeIn from "@/components/Motion/WrapperFadeIn";
import { FC } from "react";

const About: FC = () => {
  return (
    <PageContainer>
      <WrapperFadeIn>
        <h1>About</h1>
      </WrapperFadeIn>
    </PageContainer>
  );
};

export default About;
