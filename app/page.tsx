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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        <section
          id="home"
          className="py-24 bg-sand md:py-32 lg:py-40 min-h-screen"
        >
          <Hero {...heroData} />
        </section>
        <section
          id="about"
          className="py-24 md:py-32 lg:py-40 bg-white min-h-screen"
        >
          <About {...aboutData} />
        </section>
        <section id="iconwall1" className="bg-coal-700">
          <IconWall {...iconWallData1} />
        </section>
        <section id="iconwall2" className="bg-coal-700">
          <IconWall {...iconWallData2} />
        </section>
        <section id="iconwall3" className="bg-coal-700">
          <IconWall {...iconWallData3} />
        </section>
        <section id="iconwall4" className="bg-coal-700">
          <IconWall {...iconWallData4} />
        </section>
        <section
          id="projects"
          className="py-24 md:py-32 lg:py-40  min-h-screen bg-secondary-200"
        >
          <Projects {...projectsData} />
        </section>
        <section
          id="contact"
          className="py-24 md:py-32 lg:py-40  bg-slate-100 min-h-screen"
        >
          <Contact {...contactData} />
        </section>
      </main>
    </div>
  );
};

export default Home;
