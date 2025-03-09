"use client";
import React, { useContext } from "react";
import WrapperScale from "./wrappperScale";
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
		<WrapperScale className="bg-white p-6 rounded-lg flex flex-col cursor-pointer hover:shadow-lg relative shadow-2xl border border-gray-200">
			<div
				onClick={handleClick}
				className="flex flex-col flex-grow w-full h-full"
			>
				<h3 className="text-2xl  mb-2 text-primary-900">{title}</h3>
				{enterpriseImage.url && (
					<Image
						src={enterpriseImage.url}
						alt={`${title} enterprise image`}
						width={150}
						height={150}
						className="object-cover my-6"
						style={{ width: "auto", height: "auto" }}
						loading="lazy"
					/>
				)}
				<p className="text-gray-600 mb-4 flex-grow">{description}</p>
				<div className="flex flex-col h-80 relative">
					<Image
						src={image.url}
						alt={`${title} project image`}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="mb-4 rounded-lg object-contain"
						loading="lazy"
					/>
				</div>
			</div>
		</WrapperScale>
	);
};

export default ProjectCard;
