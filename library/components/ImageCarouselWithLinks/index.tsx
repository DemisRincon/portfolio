"use client";
import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import WrapperFadeIn from "../WrapperFadeIn";
import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getImageCarousel } from "@/library/contentful/querys";
import InfiniteCarousel, { ImageItemInterface } from "./InfiniteCarousel";

interface CarouselImageWithLinkProps {
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
  margin-top: 2rem;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

/**
 * CarouselImageWithLink component.
 *
 * This component fetches and displays a carousel of images with links.
 *
 * @component
 * @param {CarouselImageWithLinkProps} props - The properties for the component.
 * @param {string} props.title - The title of the carousel.
 * @param {string} props.slug - The slug used to fetch the image carousel data.
 * @param {string} props.name - The name to be displayed in the header.
 *
 * @returns {JSX.Element} The rendered CarouselImageWithLink component.
 *
 * @example
 * <CarouselImageWithLink title="Sample Title" slug="sample-slug" name="Sample Name" />
 *
 * @remarks
 * This component uses the `useState` and `useEffect` hooks to manage the state and side effects.
 * It fetches data asynchronously using the `fetchTool` function and handles errors gracefully.
 * The fetched data is displayed using the `InfiniteCarousel` component.
 *
 * @see {@link fetchTool}
 * @see {@link InfiniteCarousel}
 */
const CarouselImageWithLink: React.FC<CarouselImageWithLinkProps> = ({
  title,
  slug,
  name,
}) => {
  const [data, setData] = useState<ImageItemInterface[] | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchTool(
        getImageCarousel(slug),
        FetchType.dynamicData
      );
      setData(response.imageCarouselWithLinks.imagesCollection.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [slug]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container title={title}>
      <WrapperFadeIn threshold={0.3}>
        <Header>{name}</Header>
      </WrapperFadeIn>
      <WrapperFadeIn threshold={0.3}>
        {data && <InfiniteCarousel data={data} />}
      </WrapperFadeIn>
    </Container>
  );
};

export default React.memo(CarouselImageWithLink);
