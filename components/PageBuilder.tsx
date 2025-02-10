"use client";
import { PageContainer, PageContainerAdjusted } from "./Common";
import React from "react";
import CarrouseImageWithLink from "./ImageCarouselWithLinks";
import useGetPage from "../library/hooks/useGetPage";
import ProfesionalProjectCard from "./ProfesionalProjectCard";
import HeroSideImageHead from "./HeroSideImageHead";
import IconWall from "./IconWall";
import HeroTitle from "./HeroTitle";
import PersonalProject from "./PersonalProject";
import useManualScroll from "../library/hooks/useManualScroll";

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
  isPhoto?: boolean;
};

enum PageBuilderComponentType {
  HeroSideImageHead = "HeroSideImageHead",
  HeroWithTitleButton = "HeroWithTitleButton",
  IconWall = "IconWall",
  ImageCarouselWithLinks = "ImageCarouselWithLinks",
  ProfesionalProjectCard = "ProfesionalProjectCard",
  PersonalProjects = "PersonalProjects",
}

const PageBuilder: React.FC = () => {
  const pageResponse = useGetPage();
  useManualScroll();

  const pageData: BlockItem[] = pageResponse?.data ?? [];
  const error = pageResponse?.error;

  const renderComponent = (item: BlockItem) => {
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
              middleHeading={item.middleHeading}
              image={item.image}
              endHeading={item.endHeading ?? ""}
              sliceText={item.sliceText}
              isPhoto={item.isPhoto}
            >
              {item.subHeading && (
                <HeroSideImageHead.Subheading subHeading={item.subHeading} />
              )}
            </HeroSideImageHead>
          </PageContainerAdjusted>
        );
      case PageBuilderComponentType.HeroWithTitleButton:
        return (
          <PageContainer
            key={item._id}
            $bgColor={item.bgColor}
            $fontColor={item.fontColor}
          >
            <HeroTitle
              heading={item.heading}
              middleHeading={item.middleHeading}
              endHeading={item.endHeading ?? ""}
              button={
                item.button ?? { text: "", bgColor: "", url: "", color: "" }
              }
            >
              {item?.button?.url && (
                <HeroTitle.Button
                  text={item.button.text}
                  bgColor={item.button.bgColor}
                  url={item.button.url}
                  color={item.button.color}
                />
              )}
            </HeroTitle>
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
  };

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!pageData.length) {
    return <div>Loading...</div>;
  }

  return <>{pageData.map(renderComponent)}</>;
};

export default PageBuilder;
