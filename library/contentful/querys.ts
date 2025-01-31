export const getPageBySlug = (slug: string) => `
query {
  pageCollection(where: { slug: "${slug}" }, limit: 1) {
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
              sliceText
              image {
                url
              }
              bgColor
              fontColor
            }
            ... on IconWall {
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
            ... on HeroWithTitleButton {
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
              __typename
              slug
              title
              name
            }
            ... on ProfesionalProjectCard {
              _id
              __typename
              slug
              title
              name
              bgColor
              fontColor
              url
              description
              enterprise
              buttonText
              productPhoto {
                url
              }
            }
            ... on  PersonalProjects{
               _id
              __typename
              title
              projectName
              details
              technologies
              urlGithub
              urlApp
              bgColor
              fontColor
              image{
                url
              }
            }


          }
        }
      }
    }
  }
}`;

export const getImageCarousel = (slug: string) => `
query {
  imageCarouselWithLinks(id: "${slug}") {
    imagesCollection {
      items {
        ... on ImageWithContent {
          url
          name
          image {
            url
          }
        }
      }
    }
  }
}`;
