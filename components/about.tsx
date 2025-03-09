import { Code, Database, AppWindow, FastForward } from "lucide-react";
import { FC } from "react";
import SectionTitle from "./ui/sectionTitle";
import { AiOutlineTeam } from "react-icons/ai";
import WrapperFadeIn from "./ui/wrapperFadeIn";

interface AboutProps {
	title: string;
	section1Title: string;
	section2Title: string;
	section1Content: string[];
	section2Content: string[];
}

interface ExpertiseArea {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	title: string;
}

const About: FC<AboutProps> = ({
	title,
	section1Title,
	section2Title,
	section1Content,
}) => {
	const expertiseAreas: ExpertiseArea[] = [
		{ icon: AppWindow, title: "Frontend Development" },
		{ icon: Code, title: "Backend Development" },
		{ icon: Database, title: "Databases" },
		{ icon: FastForward, title: "Agile Development" },
		{ icon: AiOutlineTeam, title: "Teamwork" },
	];

	return (
		<div className="container mx-auto px-6">
			<WrapperFadeIn>
				<SectionTitle title={title} />
			</WrapperFadeIn>

			<div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
				<div className="space-y-8">
					<WrapperFadeIn>
						<h3 className="text-3xl mb-6 text-primary-900">
							{section1Title}
						</h3>
					</WrapperFadeIn>
					{section1Content.map((content) => (
						<WrapperFadeIn key={content}>
							<p
								key={content}
								className="text-lg text-gray-600 leading-relaxed"
								aria-label={content}
							>
								{content}
							</p>
						</WrapperFadeIn>
					))}
				</div>

				<div className="space-y-8">
					<WrapperFadeIn>
						<h3 className="text-3xl mb-6 text-primary-900">
							{section2Title}
						</h3>
					</WrapperFadeIn>

					<div className="grid grid-cols-2 gap-6">
						{expertiseAreas.map((area, index) => (
							<WrapperFadeIn key={area.title} delay={index * 200}>
								<div
									className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
									role="region"
									aria-labelledby={`expertise-${index}`}
								>
									<div className="flex items-center">
										<area.icon
											className="h-8 w-8 text-primary-600 mr-3"
											aria-hidden="true"
										/>
										<h4
											id={`expertise-${index}`}
											className="text-lg text-primary-900"
										>
											{area.title}
										</h4>
									</div>
								</div>
							</WrapperFadeIn>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
