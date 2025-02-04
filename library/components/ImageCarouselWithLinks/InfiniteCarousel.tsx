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

interface InfiniteCarouselProps {
  data: ImageItemInterface[];
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

const Carousel = styled(motion.div)`
  display: flex;
  width: fit-content;
  align-items: center;
  height: 300px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url, { scroll: true });
  };

  const carouselData = data.map((item) => (
    <Card
      key={item.name}
      image={item.image.url}
      $horizontalmargin="10px"
      width="200px"
      height="auto"
      onClick={() => handleClick(item.url)}
    />
  ));

  const carousels = 4;
  const carouselsData = Array.from({ length: carousels }, (_, i) => i).map(
    (index) => (
      <Carousel
        key={index}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {carouselData}
      </Carousel>
    )
  );

  return (
    <MainContainer>
      <WrapperFadeIn>
        <Container>{carouselsData}</Container>
      </WrapperFadeIn>
    </MainContainer>
  );
};

InfiniteCarousel.displayName = "InfiniteCarousel";

export default InfiniteCarousel;
