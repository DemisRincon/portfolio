import fetchTool from "./fetchTool";

export interface HeroSideImageHeadType {
  heading: string;
  subHeading: string;
  middleHeading: string;
  image: { url: string };
  orderInPage: number;
  bgColor: string;
  fontColor: string;
  sliceText: string;
  endHeading: string;
}

const staticQuery = (slug: string, orderInPage: number): string => `
{
    heroSideImageHeadCollection(where: { slug: "${slug}", orderInPage: ${orderInPage} }, limit: 1) {
        items {
            ...on HeroSideImageHead {
                heading
                subHeading
                middleHeading
                image { url }
                orderInPage
                bgColor
                fontColor
                sliceText
                endHeading
            }
        }
    }
}
`;

import { FetchType } from "./fetchTool";

export const getHeroSideImageHead = async (
  slug: string,
  orderInPage: number
) => {
  const query = staticQuery(slug, orderInPage);
  const response = await fetchTool(query, FetchType.dynamicData).then(
    (data) => {
      return data.heroSideImageHeadCollection.items[0];
    }
  );
  return response;
};
