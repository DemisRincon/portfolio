# Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**Note: This project is still in development.**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Deploy on Netlify

You can also deploy this project on Netlify. Check out the deployment at [https://demisrincon.netlify.app/](https://demisrincon.netlify.app/).

## Testing

This project uses [Jest](https://jestjs.io) for testing. To run the tests, use the following command:

```bash
npm test
# or
yarn test
# or
pnpm test
# or
bun test
```

## Environment Variables

Create a `.env.local` file in the root of your project to define environment variables from Contentful:

```plaintext
# Example .env.local file
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=xxxxxxxx
NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN=xxxxxxx
```

Make sure to replace the values with your actual API URL and key.

## Contributing

This project is open source and any developer can use it freely. Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Example Page Data

Here is an example of the object received by the request:

```typescript
const examplePageData: BlockItem[] = [
  {
    __typename: "HeroSideImageHead",
    _id: "1",
    heading: "Welcome to My Portfolio",
    subHeading: "Discover my work and projects",
    middleHeading: ["Innovative", "Creative", "Professional"],
    image: { url: "/images/hero.jpg", alt: "Hero Image", name: "Hero" },
    bgColor: "#ffffff",
    fontColor: "#000000",
    orderInPage: 1,
    endHeading: "Let's get started",
    sliceText: true,
    isPhoto: true,
  },
  {
    __typename: "IconWall",
    _id: "2",
    heading: "Technologies I Use",
    subHeading: "",
    middleHeading: [],
    image: { url: "", name: "" },
    bgColor: "#f0f0f0",
    fontColor: "#333333",
    orderInPage: 2,
    collectionString: ["React", "TypeScript", "Node.js"],
    showName: true,
  },
  {
    __typename: "ProfesionalProjectCard",
    _id: "3",
    heading: "Professional Projects",
    subHeading: "",
    middleHeading: [],
    image: { url: "", name: "" },
    bgColor: "#ffffff",
    fontColor: "#000000",
    orderInPage: 3,
    description: ["Project 1", "Project 2"],
    enterprise: "Tech Company",
    url: "https://techcompany.com",
    name: "Project Name",
    productPhoto: { url: "/images/project.jpg", name: "Project" },
    buttonText: "View Project",
    title: "Project Title",
  },
  {
    __typename: "PersonalProjects",
    _id: "4",
    heading: "Personal Projects",
    subHeading: "",
    middleHeading: [],
    image: { url: "/images/personal.jpg", name: "Personal Project" },
    bgColor: "#e0e0e0",
    fontColor: "#000000",
    orderInPage: 4,
    projectName: "My Personal Project",
    details: "Details about my personal project",
    technologies: "React, TypeScript",
    urlGithub: "https://github.com/myproject",
    urlApp: "https://myproject.com",
  },
];
```
