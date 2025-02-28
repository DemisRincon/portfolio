"use server";

import fetchTool, { FetchType } from "@/lib/contentful/fetchTool";

export async function getPage() {
  const data = await fetchTool(
    `{
  singlePageCollection(limit: 1, where: {slug: "homeSinglePage"}) {
    items {
      slug
      pagesCollection(limit: 8) {
        items {
          ... on HomeSection {
            greet
            name
            position
            presentation
            profile {
              url
            }
          }
          ... on IconWall {
            _id
            __typename
            orderInPage
            title
            slug
            collectionString
            name
            bgColor
            showName
            fontColor
          }
          ... on ProjectsSection {
            title
            subTitle
            projectsCollection {
              items {
                ... on Project {
                  title
                  subTitle
                  description
                  technologies
                  urlCode
                  urlApp
                  urlPromotion
                  enterpriseImage{
                    url
                  }
                  image {
                    url
                  }
                }
              }
            }
          }
          ... on AboutSection {
            title
            section1Title
            section2Title
            section1Content
            section2Content
          }
          ... on ContactSection {
            title
            subTitle
            email
            phone
            location
            linkedin
            github
          }
        }
      }
    }
  }
}`,
    FetchType.revalidatedData
  );
  return data.singlePageCollection.items[0].pagesCollection.items;
}
