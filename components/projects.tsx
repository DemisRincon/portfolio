import { FC } from "react";
import ProjectCard from "./ui/projectCard";
import SectionTitle from "./ui/sectionTitle";
import WrapperFadeIn from "./ui/wrapperFadeIn";

export interface ProjectsProps {
	title: string;
	subTitle: string;
	projectsCollection: ProjectsCollection;
}

export interface ProjectsCollection {
	items: ProjectItem[];
}

export interface ProjectItem {
	title: string;
	description: string;
	enterpriseImage: {
		url: string;
	};
	image: {
		url: string;
	};
	technologies: string[];
	urlApp?: string;
	urlCode?: string;
	urlPromotion?: string;
}

const Projects: FC<ProjectsProps> = ({
	title,
	subTitle,
	projectsCollection: { items: projectsList },
}) => {
	return (
		<div className="container mx-auto px-6 flex flex-col items-center">
			<div className="max-w-4xl mx-auto text-center mb-10">
				<SectionTitle title={title} />
				<p className="text-lg text-coal-700 max-w-2xl mx-auto">
					{subTitle}
				</p>
			</div>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projectsList.map((project, index) => (
					<WrapperFadeIn
						className="w-full sm:w-9/10 bg-white p-6 rounded-lg flex flex-col cursor-pointer hover:shadow-lg relative shadow-2xl border border-gray-200"
						transition={{
							duration: 0.6,
							delay: 0.1 * (index % 3),
						}}
						key={index}
					>
						<ProjectCard key={index} project={project} />
					</WrapperFadeIn>
				))}
			</div>
		</div>
	);
};

export default Projects;
