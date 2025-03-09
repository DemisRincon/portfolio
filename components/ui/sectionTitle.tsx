import React, { FC } from "react";

interface SectionTitleProps {
	title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
	return (
		<section
			className="max-w-4xl mx-auto text-center mb-20"
			aria-labelledby="section-title"
		>
			<h2
				id="section-title"
				className="text-4xl font-bold mb-6 text-coal-700"
			>
				{title}
			</h2>
			<div
				className="h-1 w-20 bg-coal-700 mx-auto mb-10"
				role="presentation"
			></div>
		</section>
	);
};

export default SectionTitle;
