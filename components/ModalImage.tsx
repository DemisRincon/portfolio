import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

const Wrapper = styled.div``;

const ModalContainer = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  overflow: hidden;
  background-color: rgba(
    0,
    0,
    0,
    0.75
  ); /* Optional: Add a background overlay */
`;

const RealModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  overflow: hidden;
`;

const ProductImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: scale-down;
`;

interface ModalImageProps {
  productImg: string;
  children: React.ReactNode;
}

const ModalImage: React.FC<ModalImageProps> = ({ productImg, children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Wrapper onClick={openModal}>{children}</Wrapper>
      <ModalContainer
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Image"
      >
        <RealModal>
          <ProductImage src={productImg} alt="Product Image" />
          <button onClick={closeModal}>Close</button>
        </RealModal>
      </ModalContainer>
    </>
  );
};

Modal.setAppElement("#__next"); // or the appropriate root element of your app

export default ModalImage;
