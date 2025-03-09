import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

export function Footer() {
	return (
		<footer
			className="border-t border-gray-200 py-16 bg-coal"
			aria-label="Footer"
		>
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="text-center md:text-left">
						<h3 className="text-xl font-bold mb-2 text-white">
							Demis Rincon
						</h3>
						<p className="text-white max-w-md">
							A passionate Software developer focused on creating
							exceptional digital experiences.
						</p>
					</div>
					<div className="flex flex-col items-center md:items-end gap-4">
						<div className="flex space-x-6">
							<Link
								href="https://github.com/DemisRincon"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-primary-600 transition-colors duration-300"
								aria-label="GitHub"
							>
								<BsGithub className="h-5 w-5" />
							</Link>
							<Link
								href="https://www.linkedin.com/in/demisrincon/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-primary-600 transition-colors duration-300"
								aria-label="LinkedIn"
							>
								<LiaLinkedin className="h-5 w-5" />
							</Link>
						</div>
						<p className="text-sm text-white">
							© {new Date().getFullYear()} Demis Rincon. Open
							source.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
