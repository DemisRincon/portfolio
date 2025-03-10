"use client";
import { createContext, Dispatch, SetStateAction } from "react";
import useProjectDetailsModal from "@/components/modals/ProjectDetailsModal";
import { ProjectItem } from "@/components/projects";
interface ModalContextType {
	toggleDetailsModal: () => void;
	setDataProjectDetailsModal: Dispatch<SetStateAction<ProjectItem>>;
}

export const ModalContext = createContext<ModalContextType>({
	toggleDetailsModal: () => {},
	setDataProjectDetailsModal: () => {},
});
interface ModalProviderProps {
	children: React.ReactNode;
}
const ModalProvider = ({ children }: ModalProviderProps) => {
	const {
		ProjectDetailsModal,
		toggleDetailsModal,
		setDataProjectDetailsModal,
	} = useProjectDetailsModal();

	return (
		<ModalContext.Provider
			value={{
				toggleDetailsModal,
				setDataProjectDetailsModal,
			}}
		>
			<ProjectDetailsModal />
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
