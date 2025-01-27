import React from "react";
import HeroSideImageHead from "./HeroSideImageHead";
import HeroWithTitleButton from "./HeroWithTitleButton";

type Image = {
  url: string;
  alt?: string;
};

enum PageBuilderComponentType {
  HeroSideImageHead = "HeroSideImageHead",
  HeroWithTitleButton = "HeroWithTitleButton",
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

  const pages = resolvedData.pageCollection.items[0].blocksCollection.items.map(
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
