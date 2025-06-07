import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Bebas_Neue, Poppins } from "next/font/google";
import ModalProvider from "@/lib/providers/ModalProvider";

const bebasNeue = Bebas_Neue({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
	variable: "--font-bebas-neue",
});

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: "normal",
	subsets: ["latin"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.SITE_URL || "https://demisrincon.netlify.app",
	),
	title: "Demis Rincon m - Full Stack Developer",
	description:
		"Portfolio of Demis Rincon, a Full Stack Developer specializing in React, Next.js, and TypeScript.",
	keywords: [
		"Demis Rincon",
		"Demis Rincon Portfolio",
		"Demis Rincon Developer",
		"Demis Rincon Full Stack Developer",
		"Demis Rincon React Developer",
		"Full Stack Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript Developer",
		"Web Developer",
		"Software Engineer",
		"Frontend Developer",
		"Backend Developer",
		"JavaScript",
		"CSS",
		"HTML",
		"UI/UX",
		"Web Development",
		"Programming",
		"Tech Portfolio",
		"Software Projects",
		"Developer Blog",
		"Developer Resume",
		"GitHub",
		"LinkedIn",
		"Colima",
		"Mexico",
	],
	openGraph: {
		title: "Demis Rincon - Full Stack Developer",
		description:
			"Portfolio of Demis Rincon, a Full Stack Developer specializing in React, Next.js, and TypeScript.",
		url: process.env.SITE_URL || "https://demisrincon.netlify.app",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Demis Rincon - Full Stack Developer",
		description:
			"Portfolio of Demis Rincon, a Full Stack Developer specializing in React, Next.js, and TypeScript.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ModalProvider>
					<Navbar />
					<main
						className={`${bebasNeue.variable} ${poppins.variable} font-sans`}
						role="main"
						aria-label="Main content"
					>
						{children}
					</main>
					<Footer />
				</ModalProvider>
			</body>
		</html>
	);
}
