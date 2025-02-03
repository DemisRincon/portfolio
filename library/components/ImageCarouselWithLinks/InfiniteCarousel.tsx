"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import Card from "./Card";
import WrapperFadeIn from "../WrapperFadeIn";
import { useRouter } from "next/navigation";
import React, { useMemo, useCallback } from "react";

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

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = React.memo(
  ({ data }) => {
    const router = useRouter();

    const handleClick = useCallback(
      (url: string) => {
        router.push(url, { scroll: true });
      },
      [router]
    );

    const carouselData = useMemo(() => {
      return data.map((item) => (
        <Card
          key={item.name}
          image={item.image.url}
          $horizontalmargin="10px"
          width="200px"
          height="auto"
          onClick={() => handleClick(item.url)}
        />
      ));
    }, [data, handleClick]);

    const carousels = 4;
    const carouselsData = useMemo(() => {
      return Array.from({ length: carousels }, (_, i) => i).map((index) => (
        <Carousel
          key={index}
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {carouselData}
        </Carousel>
      ));
    }, [carouselData]);

    return (
      <MainContainer>
        <WrapperFadeIn>
          <Container>{carouselsData}</Container>
        </WrapperFadeIn>
      </MainContainer>
    );
  }
);

InfiniteCarousel.displayName = "InfiniteCarousel";

export default InfiniteCarousel;
