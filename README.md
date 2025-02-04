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
