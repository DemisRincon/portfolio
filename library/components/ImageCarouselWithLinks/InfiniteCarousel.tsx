"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "./Card";
import WrapperFadeIn from "../WrapperFadeIn";
import { useRouter } from "next/navigation";
import React from "react";

export interface ImageItemInterface {
  url: string;
  name: string;
  image: {
    url: string;
  };
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 100%;
`;

const Carrusel = styled(motion.div)`
  display: flex;
  width: fit-content;
  display: flex;
  align-items: center;
  height: 300px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const InfiniteCarousel: React.FC<{ data: ImageItemInterface[] }> = ({
  data,
}) => {
  const router = useRouter();

  const carouselData = React.useMemo(() => {
    return data.map((item) => (
      <Card
        key={item.name}
        image={item.image.url}
        $horizontalmargin="10px"
        width="200px"
        height="auto"
        onClick={() => router.push(item.url, { scroll: true })}
      />
    ));
  }, [data, router]);

  const carrousels = 4;
  const carrouselsData = React.useMemo(() => {
    return Array.from({ length: carrousels }, (_, i) => i).map((index) => (
      <Carrusel
        key={index}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {carouselData}
      </Carrusel>
    ));
  }, [carouselData]);

  return (
    <MainContainer>
      <WrapperFadeIn>
        <Container>{carrouselsData}</Container>
      </WrapperFadeIn>
    </MainContainer>
  );
};

export default InfiniteCarousel;
