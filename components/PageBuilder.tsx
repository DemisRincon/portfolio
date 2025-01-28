import React from "react";
import HeroSideImageHead from "./HeroSideImageHead";
import HeroWithTitleButton from "./HeroWithTitleButton";
import IconWall from "./IconWall";
import CarrouseImageWithLink from "./CarrouseImageWithLink";

type Image = {
  url: string;
  alt?: string;
};

enum PageBuilderComponentType {
  HeroSideImageHead = "HeroSideImageHead",
  HeroWithTitleButton = "HeroWithTitleButton",
  IconWall = "IconWall",
  ImageCarouselWithLinks = "ImageCarouselWithLinks",
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
            title?: string;
          }[];
        };
      }[];
    };
  } | null>(null);

  React.useEffect(() => {
    data.then(setResolvedData);
  }, [data]);

  if (!resolvedData) {
    return <div>hello</div>;
  }

  const pages =
    resolvedData.pageCollection?.items[0].blocksCollection.items.map(
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
              />
            );

          case PageBuilderComponentType.HeroWithTitleButton:
            return (
              <HeroWithTitleButton
                key={_id}
                heading={rest.heading}
                subHeading={rest.subHeading}
                middleHeading={rest.middleHeading || []}
                bgColor={rest.bgColor}
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
          default:
            return null;
        }
      }
    );

  return <>{pages}</>;
};

export default PageBuilder;
