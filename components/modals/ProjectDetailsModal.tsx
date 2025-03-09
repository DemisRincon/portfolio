import React, { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "../projects";
import Button from "../ui/button";

interface ModalViewProps {
	toggle: () => void;
	isOpen: boolean;
	data: ProjectItem;
}

const ModalView: React.FC<ModalViewProps> = ({ toggle, isOpen, data }) => {
	if (!isOpen) return null;

	const {
		title,
		description,
		technologies,
		enterpriseImage,
		image,
		urlApp,
		urlCode,
		urlPromotion,
	} = data;

	return (
		<>
			<div
				className="fixed z-50 inset-0 bg-gray-500/75 transition-opacity"
				aria-hidden="true"
			></div>

			<div
				className="fixed inset-0 z-50 w-screen h-screen flex items-start md:items-center justify-center py-8"
				onClick={toggle}
			>
				<div
					className="flex flex-col justify-between overflow-y-auto scrollbar-hide items-center rounded-lg text-left shadow-xl transition-all bg-white w-11/12 h-[98%]"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="flex flex-col justify-start items-center w-full">
						<div className="flex flex-col justify-center items-center w-full pt-6 sm:flex-row">
							<h2 className="text-coal-700 text-4xl font-bebasNeue font-bold text-center">
								{title}
							</h2>
							{enterpriseImage?.url && (
								<div className="flex items-center flex-col m-6">
									<Image
										src={enterpriseImage.url}
										alt={title}
										width={200}
										height={100}
										className="object-scale-down max-h-10"
									/>
								</div>
							)}
						</div>
						<div className="flex items-center flex-col my-6 w-11/12">
							{image?.url && (
								<Image
									src={image.url}
									alt={title}
									width={500}
									height={100}
									className="object-scale-down"
								/>
							)}
						</div>
						<p className="text-gray-500 w-10/12">{description}</p>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mt-4">
							{technologies.map((tech, index) => (
								<div
									key={index}
									className="bg-gray-200 p-2 rounded"
								>
									{tech}
								</div>
							))}
						</div>
					</div>
					<div className="flex justify-around items-center w-full py-10 flex-col sm:flex-row gap-4 sm:gap-0">
						{urlPromotion && (
							<Button
								buttonColor="lightBlue"
								text="Visit Promotional Site"
								href={urlPromotion}
							/>
						)}
						{urlApp && (
							<Button
								buttonColor="lightBlue"
								text="Visit Live App"
								href={urlApp}
							/>
						)}
						{urlCode && (
							<Button
								buttonColor="lightBlue"
								text="View Code"
								href={urlCode}
							/>
						)}
						<Button
							buttonColor="darkBlue"
							text="Close"
							toggle={toggle}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

const useProjectDetailsModal = () => {
	const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
	const [data, setData] = useState<ProjectItem>({
		title: "",
		description: "",
		technologies: [],
		image: { url: "" },
		enterpriseImage: { url: "" },
	});

	const toggleDetailsModal = () => {
		setIsDetailsModalOpen(!isDetailsModalOpen);
	};

	const ModalComponent = () => (
		<ModalView
			toggle={toggleDetailsModal}
			isOpen={isDetailsModalOpen}
			data={data}
		/>
	);

	return {
		toggleDetailsModal,
		ProjectDetailsModal: ModalComponent,
		setDataProjectDetailsModal: setData,
	};
};

export default useProjectDetailsModal;
