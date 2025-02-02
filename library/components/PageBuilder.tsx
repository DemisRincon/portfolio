"use client";
import styled from "styled-components";
import { PageContainer, PageContainerAdjusted } from "./Common";
import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import CarrouseImageWithLink from "./ImageCarouselWithLinks";
import useGetPage from "../hooks/useGetPage";
import ProfesionalProjectCard from "./ProfesionalProjectCard";
import HeroSideImageHead from "./HeroSideImageHead";
import IconWall from "./IconWall";
import HeroWithTitleButton from "./HeroWithTitleButton";
import PersonalProject from "./PersonalProject";

export type Image = {
  url: string;
  alt?: string;
  name: string;
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
  collectionString?: string[];
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
  width: 100%;
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
          <PageContainerAdjusted
            key={item._id}
            $bgColor={item.bgColor}
            $fontColor={item.fontColor}
          >
            <HeroSideImageHead
              heading={item.heading}
              subHeading={item.subHeading}
              middleHeading={item.middleHeading}
              image={item.image}
              endHeading={item.endHeading ?? ""}
              sliceText={item.sliceText}
            />
          </PageContainerAdjusted>
        );
      case PageBuilderComponentType.HeroWithTitleButton:
        return (
          <PageContainer
            key={item._id}
            $bgColor={item.bgColor}
            $fontColor={item.fontColor}
          >
            <HeroWithTitleButton
              heading={item.heading}
              subHeading={item.subHeading}
              middleHeading={item.middleHeading}
              endHeading={item.endHeading ?? ""}
              button={
                item.button ?? { text: "", bgColor: "", url: "", color: "" }
              }
            />
          </PageContainer>
        );
      case PageBuilderComponentType.IconWall:
        return (
          <PageContainerAdjusted
            key={item._id}
            $bgColor={item.bgColor}
            $fontColor={item.fontColor}
          >
            <IconWall
              name={item.name ?? ""}
              collectionString={item.collectionString ?? []}
              showName={item.showName}
            />
          </PageContainerAdjusted>
        );
      case PageBuilderComponentType.ImageCarouselWithLinks:
        return (
          <PageContainerAdjusted key={item._id}>
            <CarrouseImageWithLink
              title={item.title ?? ""}
              name={item.name ?? ""}
              slug={item.slug ?? ""}
            />
          </PageContainerAdjusted>
        );
      case PageBuilderComponentType.ProfesionalProjectCard:
        return (
          <PageContainer
            key={item._id}
            $bgColor={item.bgColor}
            $fontColor={item.fontColor}
          >
            <ProfesionalProjectCard
              fontColor={item.fontColor ?? ""}
              description={item.description}
              enterprise={item.enterprise ?? ""}
              url={item.url ?? ""}
              name={item.name ?? ""}
              productPhoto={item.productPhoto ?? { url: "" }}
              buttonText={item.buttonText}
              title={item.title ?? ""}
            />
          </PageContainer>
        );
      case PageBuilderComponentType.PersonalProjects:
        console.log(item);
        return (
          <PageContainer
            key={item._id}
            $bgColor={item.bgColor}
            $fontColor={item.fontColor}
          >
            <PersonalProject
              projectName={item.projectName ?? ""}
              details={item.details ?? ""}
              technologies={item.technologies ?? ""}
              urlGithub={item.urlGithub ?? ""}
              urlApp={item.urlApp ?? ""}
              image={item.image}
            />
          </PageContainer>
        );
      default:
        return null;
    }
  }, []);

  const components = useMemo(
    () => pageData?.map(renderComponent),
    [pageData, renderComponent]
  );

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!pageData) {
    return null;
  }

  return <PageWrapper>{components}</PageWrapper>;
};

export default React.memo(PageBuilder);
