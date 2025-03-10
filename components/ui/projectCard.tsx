"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { ModalContext } from "@/lib/providers/ModalProvider";
import { ProjectItem } from "../projects";

const ProjectCard: React.FC<{ project: ProjectItem }> = ({
	project: {
		title,
		description,
		technologies,
		enterpriseImage,
		image,
		...rest
	},
}) => {
	const { setDataProjectDetailsModal, toggleDetailsModal } =
		useContext(ModalContext);

	const handleClick = () => {
		setDataProjectDetailsModal({
			title,
			description,
			technologies,
			enterpriseImage,
			image,
			...rest,
		});
		toggleDetailsModal();
	};
	return (
		<div>
			<div onClick={handleClick} className="flex flex-col w-full h-full">
				<h2 className="mb-2 text-primary-900 text-3xl font-bold">
					{title}
				</h2>

				<div className="flex items-center flex-col my-6 w-11/12">
					<Image
						src={enterpriseImage.url}
						alt={title}
						width={150}
						height={100}
						className="object-scale-down max-h-10"
						loading="lazy"
					/>
				</div>

				<div className="flex items-center flex-col my-6 w-11/12">
					<Image
						src={image.url}
						alt={title}
						width={300}
						height={100}
						className="object-scale-down"
						loading="lazy"
					/>
				</div>
				<h3 className="text-gray-600 mb-4 text-2xl">
					Click to see details
				</h3>
			</div>
		</div>
	);
};

export default ProjectCard;
