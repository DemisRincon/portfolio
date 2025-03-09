import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import IconWall from "@/components/iconWall";
import { getPage } from "./actions";

const Home = async () => {
	const [
		heroData,
		aboutData,
		iconWallData1,
		iconWallData2,
		iconWallData3,
		iconWallData4,
		projectsData,
		contactData,
	] = await getPage();

	return (
		<div className="min-h-screen bg-white">
			<main>
				<section
					id="home"
					className="py-24 bg-sand md:py-32 lg:py-40 min-h-screen"
					aria-labelledby="home-heading"
				>
					<h1 id="home-heading" className="sr-only">
						Home
					</h1>
					<Hero {...heroData} />
				</section>
				<section
					id="about"
					className="py-24 md:py-32 lg:py-40 bg-white min-h-screen"
					aria-labelledby="about-heading"
				>
					<h2 id="about-heading" className="sr-only">
						About
					</h2>
					<About {...aboutData} />
				</section>
				<section
					id="iconwall1"
					className="bg-coal-700"
					aria-labelledby="iconwall1-heading"
				>
					<h2 id="iconwall1-heading" className="sr-only">
						Icon Wall 1
					</h2>
					<IconWall {...iconWallData1} />
				</section>
				<section
					id="iconwall2"
					className="bg-coal-700"
					aria-labelledby="iconwall2-heading"
				>
					<h2 id="iconwall2-heading" className="sr-only">
						Icon Wall 2
					</h2>
					<IconWall {...iconWallData2} />
				</section>
				<section
					id="iconwall3"
					className="bg-coal-700"
					aria-labelledby="iconwall3-heading"
				>
					<h2 id="iconwall3-heading" className="sr-only">
						Icon Wall 3
					</h2>
					<IconWall {...iconWallData3} />
				</section>
				<section
					id="iconwall4"
					className="bg-coal-700"
					aria-labelledby="iconwall4-heading"
				>
					<h2 id="iconwall4-heading" className="sr-only">
						Icon Wall 4
					</h2>
					<IconWall {...iconWallData4} />
				</section>
				<section
					id="projects"
					className="py-24 md:py-32 lg:py-40 min-h-screen bg-secondary-200"
					aria-labelledby="projects-heading"
				>
					<h2 id="projects-heading" className="sr-only">
						Projects
					</h2>
					<Projects {...projectsData} />
				</section>
				<section
					id="contact"
					className="py-24 md:py-32 lg:py-40 bg-slate-100 min-h-screen"
					aria-labelledby="contact-heading"
				>
					<h2 id="contact-heading" className="sr-only">
						Contact
					</h2>
					<Contact {...contactData} />
				</section>
			</main>
		</div>
	);
};

export default Home;
