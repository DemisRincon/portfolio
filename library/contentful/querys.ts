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
              bgColor
              fontColor
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
            ... on ImageCarouselWithLinks {
            _id
            slug
            title
            name
            }
          }
        }
      }
    }
  }
}`;

export const getImageCarousel = (slug: string) => `
query{
  imageCarouselWithLinksCollection(where: {slug: "${slug}"}) {
    items {
      _id
      slug
      title
      name
      imagesCollection {
        items {
          ... on ImageWithContent {
            _id
          }
        }
      }
    }
  }
}`;
