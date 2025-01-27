export const getPageBySlug = (slug: string) => `
query{
    pageCollection(where:{slug:"${slug}"}, limit: 1) {
    items {
      slug
      name
      blocksCollection {
        ... on PageBlocksCollection {
          items {
            ... on HeroSideImageHead {
              _id
               __typename
              orderInPage
              slug
              name           
              heading
              endHeading
              middleHeading
              subHeading
              image{
                url
              }
            }
            ...on HeroWithTitleButton{
              _id
              __typename
              name
              title
              orderInPage
              slug
              heading
              middleHeading
              endHeading
              subHeading
              bgColor
              fontColor
              middleHeadColor
              button
            }
            ...on IconWall{
              _id
              __typename
              orderInPage
              title
              slug
              collection
              name
              bgColor
              showName
              fontColor
            }

            

          }
        }
      }
    }
  }
}`;
