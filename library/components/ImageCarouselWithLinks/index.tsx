"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import WrapperFadeIn from "../WrapperFadeIn";
import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getImageCarousel } from "@/library/contentful/querys";
import InfiniteCarousel, { ImageItemInterface } from "./InfiniteCarousel";

interface CarrouseImageWithLinkProps {
  title: string;
  slug: string;
  name: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2rem;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4rem;
  }
`;

const CarrouseImageWithLink: React.FC<CarrouseImageWithLinkProps> = ({
  title,
  slug,
  name,
}) => {
  const [data, setData] = useState<ImageItemInterface[] | null>(null);

  const fetchData = useCallback(async () => {
    const data = await fetchTool(getImageCarousel(slug), FetchType.dynamicData);
    setData(data.imageCarouselWithLinks.imagesCollection.items);
  }, [slug]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <WrapperFadeIn>
      <Container title={title}>
        <Header>{name}</Header>
        {memoizedData && <InfiniteCarousel data={memoizedData} />}
      </Container>
    </WrapperFadeIn>
  );
};

export default CarrouseImageWithLink;
