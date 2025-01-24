"use client";
import { PageContainer } from "@/components/styled";
import WrapperFadeIn from "@/components/WrapperFadeIn";
import React from "react";

const Home = () => {
  return (
    <PageContainer>
      <WrapperFadeIn fromTop>
        <h1>About</h1>
      </WrapperFadeIn>
    </PageContainer>
  );
};

export default Home;
