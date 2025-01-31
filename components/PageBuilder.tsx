import React from "react";
import HeroSideImageHead from "./HeroSideImageHead";
import HeroWithTitleButton from "./HeroWithTitleButton";
import IconWall from "./IconWall";
import CarrouseImageWithLink from "./CarrouseImageWithLink";
import ProfesionalProjectCard from "./ProfesionalProjectCard";
import PersonalProject from "./PersonalProject";

type Image = {
  url: string;
  alt?: string;
};

enum PageBuilderComponentType {
  HeroSideImageHead = "HeroSideImageHead",
  HeroWithTitleButton = "HeroWithTitleButton",
  IconWall = "IconWall",
  ImageCarouselWithLinks = "ImageCarouselWithLinks",
  ProfesionalProjectCard = "ProfesionalProjectCard",
  PersonalProjects = "PersonalProjects",
}
interface PageBuilderProps {
  data: Promise<{
    pageCollection: {
      items: {
        blocksCollection: {
          items: {
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
            collection?: string[];
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
            urlgithub?: string;
            urlapp?: string;
          }[];
        };
      }[];
    };
  }>;
}

const PageBuilder: React.FC<PageBuilderProps> = ({ data }) => {
  const [resolvedData, setResolvedData] = React.useState<{
    pageCollection: {
      items: {
        blocksCollection: {
          items: {
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
            collection?: string[];
            name?: string;
            showName?: boolean;
            slug?: string;
            sliceText?: boolean;
            title?: string;
            description?: string[];
            productPhoto?: Image;
            enterprise?: string;
            url?: string;
            buttonText?: string;
            projectName?: string;
            details?: string;
            technologies?: string;
            urlgithub?: string;
            urlapp?: string;
          }[];
        };
      }[];
    };
  } | null>(null);

  React.useEffect(() => {
    data.then(setResolvedData);
  }, [data]);

  const pages =
    resolvedData?.pageCollection?.items[0].blocksCollection.items.map(
      (pageData) => {
        const { __typename, _id, ...rest } = pageData;
        switch (__typename) {
          case PageBuilderComponentType.HeroSideImageHead:
            return (
              <HeroSideImageHead
                key={_id}
                heading={rest.heading}
                subHeading={rest.subHeading}
                middleHeading={rest.middleHeading || []}
                image={rest.image}
                orderInPage={rest.orderInPage}
                bgColor={rest.bgColor || ""}
                fontColor={rest.fontColor || ""}
                sliceText={rest.sliceText || false}
                endHeading={rest.endHeading || ""}
              />
            );

          case PageBuilderComponentType.HeroWithTitleButton:
            return (
              <HeroWithTitleButton
                key={_id}
                heading={rest.heading}
                subHeading={rest.subHeading}
                middleHeading={rest.middleHeading || []}
                bgColor={rest.bgColor || ""}
                endHeading={rest.endHeading || ""}
                orderInPage={rest.orderInPage}
                fontColor={rest.fontColor}
                button={
                  rest.button || { text: "", bgColor: "", url: "", color: "" }
                }
              />
            );

          case PageBuilderComponentType.IconWall:
            return (
              <IconWall
                key={_id}
                collection={rest.collection || []}
                name={rest.name || ""}
                fontColor={rest.fontColor || ""}
                bgColor={rest.bgColor || ""}
                showName={rest.showName || false}
              />
            );

          case PageBuilderComponentType.ImageCarouselWithLinks:
            return (
              <CarrouseImageWithLink
                key={_id}
                title={rest.title || ""}
                name={rest.name || ""}
                slug={rest.slug || ""}
              />
            );
          case PageBuilderComponentType.ProfesionalProjectCard:
            return (
              <ProfesionalProjectCard
                key={_id}
                fontColor={rest.fontColor || ""}
                name={rest.name || ""}
                bgColor={rest.bgColor || ""}
                description={
                  Array.isArray(rest.description) ? rest.description : []
                }
                productPhoto={rest.productPhoto || { url: "" }}
                enterprise={rest.enterprise || ""}
                url={rest.url || ""}
                buttonText={rest.buttonText || ""}
              />
            );

          case PageBuilderComponentType.PersonalProjects:
            console.log("PersonalProjects", rest);
            return (
              <PersonalProject
                key={_id}
                projectName={rest.projectName || ""}
                details={rest.details || ""}
                technologies={rest.technologies || ""}
                urlgithub={rest.urlgithub || ""}
                urlapp={rest.urlapp || ""}
                image={rest.image || { url: "" }}
              />
            );
          default:
            console.log("No component found", __typename);
            console.log("No component found", pageData);
            return null;
        }
      }
    );

  return <>{pages}</>;
};

export default PageBuilder;
