"use client";
import styled from "styled-components";
import { PageContainer } from "./common";

import React, { useCallback } from "react";
import Image from "next/image";
import CarrouseImageWithLink from "./ImageCarouselWithLinks";
import useGetPage from "../hooks/useGetPage";
import ProfesionalProjectCard from "./ProfesionalProjectCard";

type Image = {
  url: string;
  alt?: string;
};

export type BlockItem = {
  __typename: string;
  _id: string;
  heading: string;
  subHeading: string;
  middleHeading: string[];
  image: Image;
  bgColor?: string;
  endHeading?: string;
  fontColor?: string;
  orderInPage: number;
  button?: {
    text: string;
    bgColor: string;
    url: string;
    color: string;
  };
  collection?: Image[];
  name?: string;
  slug?: string;
  title?: string;
  description?: string[];
  productPhoto?: Image;
  enterprise?: string;
  url?: string;
  enterpriseImage?: Image;
  buttonText?: string;
  projectName?: string;
  details?: string;
  technologies?: string;
  urlGithub?: string;
  urlApp?: string;
  showName?: boolean;
  sliceText?: boolean;
};

enum PageBuilderComponentType {
  HeroSideImageHead = "HeroSideImageHead",
  HeroWithTitleButton = "HeroWithTitleButton",
  IconWall = "IconWall",
  ImageCarouselWithLinks = "ImageCarouselWithLinks",
  ProfesionalProjectCard = "ProfesionalProjectCard",
  PersonalProjects = "PersonalProjects",
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  padding-top: 80px;
`;

const PageBuilder: React.FC = () => {
  const result = useGetPage();
  const error = result?.error;
  const pageData = result?.data as BlockItem[] | undefined;

  const renderComponent = useCallback((item: BlockItem) => {
    switch (item.__typename) {
      case PageBuilderComponentType.HeroSideImageHead:
        return (
          <PageContainer key={item._id}>
            {PageBuilderComponentType.HeroSideImageHead}
          </PageContainer>
        );
      case PageBuilderComponentType.HeroWithTitleButton:
        return (
          <PageContainer key={item._id}>
            {PageBuilderComponentType.HeroWithTitleButton}
          </PageContainer>
        );
      case PageBuilderComponentType.IconWall:
        return (
          <PageContainer key={item._id}>
            {PageBuilderComponentType.IconWall}
          </PageContainer>
        );
      case PageBuilderComponentType.ImageCarouselWithLinks:
        return (
          <PageContainer key={item._id}>
            <CarrouseImageWithLink
              title={item.title ?? ""}
              name={item.name ?? ""}
              slug={item.slug ?? ""}
            />
          </PageContainer>
        );
      case PageBuilderComponentType.ProfesionalProjectCard:
        console.log(item);
        return (
          <PageContainer key={item._id} id={item.title}>
            <ProfesionalProjectCard
              fontColor={item.fontColor ?? ""}
              description={item.description}
              enterprise={item.enterprise ?? ""}
              url={item.url ?? ""}
              name={item.name ?? ""}
              productPhoto={item.productPhoto ?? { url: "" }}
              buttonText={item.buttonText}
            />
          </PageContainer>
        );
      case PageBuilderComponentType.PersonalProjects:
        return (
          <PageContainer key={item._id}>
            {PageBuilderComponentType.PersonalProjects}
          </PageContainer>
        );
      default:
        return null;
    }
  }, []);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!pageData) {
    return null;
  }

  const components = pageData.map(renderComponent);

  return <PageWrapper>{components}</PageWrapper>;
};

export default React.memo(PageBuilder);
