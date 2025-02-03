"use client";
import { PageContainer, PageContainerAdjusted } from "./Common";
import React, { useCallback, useMemo } from "react";
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

/**
 * PageBuilder component is responsible for rendering various types of page components
 * based on the data fetched from the `useGetPage` hook.
 *
 * @component
 * @returns {React.FC} A functional component that renders different page components.
 *
 * @example
 * <PageBuilder />
 *
 * @remarks
 * This component uses the `useMemo` and `useCallback` hooks to optimize performance
 * by memoizing the page data and the render function for the components.
 *
 * @hook
 * @function useGetPage
 * Fetches the page data which includes an array of `BlockItem` objects.
 *
 * @typedef {Object} BlockItem
 * Represents a block item with various properties used to render different components.
 *
 * @typedef {Object} PageBuilderComponentType
 * Enum-like object that defines the different types of components that can be rendered.
 *
 * @param {BlockItem[]} pageData - The array of block items fetched from the `useGetPage` hook.
 * @param {Object} error - The error object returned from the `useGetPage` hook if there is an error.
 *
 * @function renderComponent
 * Renders the appropriate component based on the `__typename` property of the `BlockItem`.
 *
 * @param {BlockItem} item - The block item to be rendered.
 * @returns {JSX.Element | null} The rendered component or null if the type is not recognized.
 *
 * @function components
 * Memoized array of rendered components.
 *
 * @returns {JSX.Element} The rendered components or an error/loading message.
 */
const PageBuilder: React.FC = () => {
  const pageResponse = useGetPage();
  const pageData: BlockItem[] = useMemo(
    () => pageResponse?.data ?? [],
    [pageResponse?.data]
  );
  const error = pageResponse?.error;

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
    return <div>Loading...</div>;
  }

  return <>{components}</>;
};

export default React.memo(PageBuilder);
