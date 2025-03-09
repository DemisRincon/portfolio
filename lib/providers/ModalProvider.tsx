"use client";
import { createContext, Dispatch, SetStateAction } from "react";
import useProjectDetailsModal from "@/components/modals/ProjectDetailsModal";
import { ProjectProps } from "@/components/ui/projectCard";
interface ModalContextType {
	toggleDetailsModal: () => void;
	setDataProjectDetailsModal: Dispatch<SetStateAction<ProjectProps>>;
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
