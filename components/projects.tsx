import { FC } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import SectionTitle from "./ui/sectionTitle";
import SkillWall from "./ui/skillWall";
import WrappperScale from "./ui/wrappperScale";

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
			<div className="grid grdi-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[90%]">
				{projectsList.map((project, index) => (
					<WrappperScale
						key={index}
						className="bg-white p-6 rounded-lg flex flex-col cursor-pointer hover:shadow-lg relative shadow-2xl border border-gray-200"
					>
						<h3 className="text-2xl  mb-2 text-primary-900">
							{project.title}
						</h3>
						{project.enterpriseImage.url && (
							<Image
								src={project.enterpriseImage.url}
								alt={`${project.title} enterprise image`}
								width={150}
								height={150}
								className="object-cover my-6"
								style={{ width: "auto", height: "auto" }}
								loading="lazy"
							/>
						)}
						<p className="text-gray-600 mb-4 flex-grow">
							{project.description}
						</p>
						<div className="flex flex-col h-80 relative">
							<Image
								src={project.image.url}
								alt={`${project.title} project image`}
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="mb-4 rounded-lg object-contain"
								loading="lazy"
							/>
						</div>

						<div className="flex justify-between flex-row-reverse mt-4">
							{project.urlApp && (
								<Link
									href={project.urlApp}
									aria-label={`Live app for ${project.title}`}
									className="flex items-center text-primary-600 hover:text-primary-800  transition-colors duration-300"
								>
									<ExternalLink className="mr-2 h-4 w-4" />
									Live App
								</Link>
							)}
							{project.urlCode && (
								<Link
									href={project.urlCode}
									aria-label={`Code repository for ${project.title}`}
									className="flex items-center text-primary-600 hover:text-primary-800  transition-colors duration-300"
								>
									<SiGithub className="mr-2 h-4 w-4" />
									Code
								</Link>
							)}
							{project.urlPromotion && (
								<Link
									href={project.urlPromotion}
									aria-label={`Promotional page for ${project.title}`}
									className="flex items-center text-primary-600 hover:text-primary-800  transition-colors duration-300"
								>
									<ExternalLink className="mr-2 h-4 w-4" />
									Promotional Page
								</Link>
							)}
						</div>

						<div className="absolute inset-0 bg-white p-6 rounded-lg shadow-md flex flex-col justify-between items-center opacity-0 hover:opacity-100 transition-opacity duration-300 ">
							<SkillWall skillList={project.technologies} />
							<div className="flex justify-between flex-row-reverse w-full mt-4">
								{project.urlApp && (
									<Link
										href={project.urlApp}
										aria-label={`Live app for ${project.title}`}
										className="flex items-center text-primary-600 hover:text-primary-800  transition-colors duration-300"
									>
										<ExternalLink className="mr-2 h-4 w-4" />
										Live App
									</Link>
								)}
								{project.urlCode && (
									<Link
										href={project.urlCode}
										aria-label={`Code repository for ${project.title}`}
										className="flex items-center text-primary-600 hover:text-primary-800  transition-colors duration-300"
									>
										<SiGithub className="mr-2 h-4 w-4" />
										Code
									</Link>
								)}
								{project.urlPromotion && (
									<Link
										href={project.urlPromotion}
										aria-label={`Promotional page for ${project.title}`}
										className="flex items-center text-primary-600 hover:text-primary-800  transition-colors duration-300"
									>
										<ExternalLink className="mr-2 h-4 w-4" />
										Promotional Page
									</Link>
								)}
							</div>
						</div>
					</WrappperScale>
				))}
			</div>
		</div>
	);
};

export default Projects;
