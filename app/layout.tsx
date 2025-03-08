import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Bebas_Neue, Poppins } from 'next/font/google';

const bebasNeue = Bebas_Neue({
	weight: '400',
	style: 'normal',
	subsets: ['latin'],
	variable: '--font-bebas-neue',
});

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: 'normal',
	subsets: ['latin'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.SITE_URL || 'https://demisrincon.netlify.app',
	),
	title: 'Demis Rincon',
	description: 'Portfolio of Demis Rincon',
	keywords: [
		'Demis Rincon',
		'Portfolio',
		'Web Developer',
		'software developer',
		'full stack software developer',
		'software developer resume',
		'software developer portfolio',
		'software developer website',
		'software developer personal website',
		'software developer blog',
		'software developer personal blog',
		'software developer projects',
		'software developer skills',
		'software developer about me',
		'software developer contact',
		'software developer social media',
		'software developer github',
		'software developer linkedin',
		'Frontend Developer',
		'React',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'CSS',
		'HTML',
		'Web Development',
		'Programming',
		'Software Engineer',
		'UI/UX',
		'Tech',
	],
	openGraph: {
		title: 'Demis Rincon',
		description: 'Portfolio of Demis Rincon',
		url: process.env.SITE_URL || 'https://demisrincon.netlify.app',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta
					name="google-site-verification"
					content="LTYcCzcKBQEGXW5HyZyQBT3WTz5pNr7_-7Q0fS9kj9M"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="author" content="Demis Rincon" />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="bingbot" content="index, follow" />
				<meta name="yandex" content="index, follow" />
				<meta property="og:title" content="Demis Rincon" />
				<meta
					property="og:description"
					content="Portfolio of Demis Rincon"
				/>
				<meta
					property="og:image"
					content="https://demisrincon.netlify.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fclr5xx7aag53%2F43rtpf6p6EsHo8VHHvzJS2%2Fe1a1637b2426a9085f3c631d927c63d2%2Fphotoweb.webp&w=1080&q=75"
				/>
				<meta
					property="og:url"
					content="https://demisrincon.netlify.app/"
				/>
				<meta property="og:type" content="website" />
			</Head>
			<body
				className={`font-sans ${bebasNeue.variable} ${poppins.variable}`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
