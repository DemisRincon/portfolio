"use server";

import fetchTool, { FetchType } from "@/lib/contentful/fetchTool";

export async function getPage() {
  try {
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

    if (!data?.singlePageCollection?.items?.[0]?.pagesCollection?.items) {
      throw new Error('Required data structure not found in Contentful response');
    }

    return data.singlePageCollection.items[0].pagesCollection.items;
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Return default/empty data structure to prevent the build from failing
    return [
      {
        greet: '',
        name: '',
        position: '',
        presentation: '',
        profile: { url: '' }
      },
      {
        title: '',
        section1Title: '',
        section2Title: '',
        section1Content: '',
        section2Content: ''
      },
      {
        _id: '',
        __typename: 'IconWall',
        orderInPage: 1,
        title: '',
        slug: '',
        collectionString: '',
        name: '',
        bgColor: '',
        showName: false,
        fontColor: ''
      },
      {
        _id: '',
        __typename: 'IconWall',
        orderInPage: 2,
        title: '',
        slug: '',
        collectionString: '',
        name: '',
        bgColor: '',
        showName: false,
        fontColor: ''
      },
      {
        _id: '',
        __typename: 'IconWall',
        orderInPage: 3,
        title: '',
        slug: '',
        collectionString: '',
        name: '',
        bgColor: '',
        showName: false,
        fontColor: ''
      },
      {
        _id: '',
        __typename: 'IconWall',
        orderInPage: 4,
        title: '',
        slug: '',
        collectionString: '',
        name: '',
        bgColor: '',
        showName: false,
        fontColor: ''
      },
      {
        title: '',
        subTitle: '',
        projectsCollection: {
          items: []
        }
      },
      {
        title: '',
        subTitle: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        github: ''
      }
    ];
  }
}
