import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./ui/button";
import StrongRoulete from "./ui/strongRoulete";
import WrapperFadeIn from "./ui/wrapperFadeIn";

interface Profile {
	url: string;
}

interface HeroProps {
	greet: string;
	name: string;
	position: string[];
	presentation: string;
	profile: Profile;
}

const Hero = (props: HeroProps) => {
	const {
		greet,
		name,
		position,
		presentation,
		profile: { url: imageUrl },
	} = props;
	return (
		<div className="container mx-auto px-6">
			<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 pt-20">
				<div className="w-full lg:w-1/2 space-y-8">
					<WrapperFadeIn>
						<div className="space-y-3">
							<p className="text-gray-800 font-medium">{greet}</p>
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-coal-700">
								{name}
							</h1>
							<h1 className="text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-coal-700">
								<StrongRoulete list={position} />
							</h1>
						</div>
						<p className="text-lg text-gray-600 max-w-xl leading-relaxed">
							{presentation}
						</p>
					</WrapperFadeIn>
					<WrapperFadeIn delay={500}>
						<div className="flex flex-wrap gap-6 pt-4">
							<Button
								text="View My Work"
								buttonColor="black"
								href="#projects"
								icon={
									<ArrowRight
										className="ml-2 h-4 w-4"
										aria-hidden="true"
									/>
								}
								aria-label="View My Work"
							/>
							<Button
								text="Contact Me"
								buttonColor="black"
								href="#contact"
								aria-label="Contact Me"
							/>
						</div>
					</WrapperFadeIn>
				</div>
				<div className="w-full lg:w-1/2 flex justify-center">
					<WrapperFadeIn delay={700}>
						<div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-coal-200">
							<Image
								src={imageUrl}
								alt="Profile picture of the user"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover"
								priority
							/>
						</div>
					</WrapperFadeIn>
				</div>
			</div>
		</div>
	);
};

export default Hero;
