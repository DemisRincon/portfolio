"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

interface CardProps extends ImageProps {
  image: string;
}

interface ImageProps {
  $imagecircular?: boolean;
  width?: string;
  height?: string;
  $horizontalmargin?: string;
  onClick?: () => void;
}

/**
 * A functional component that represents a card with an image.
 * The card scales up and moves slightly upwards when hovered over.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.image - The source URL of the image to be displayed.
 * @param {boolean} props.$imagecircular - A flag indicating if the image should be circular.
 * @param {number} props.width - The width of the image.
 * @param {number} props.height - The height of the image.
 * @param {number} props.$horizontalmargin - The horizontal margin of the image.
 * @param {function} props.onClick - The function to be called when the card is clicked.
 * @returns {JSX.Element} The rendered card component.
 */
const Card: React.FC<CardProps> = ({
  image,
  $imagecircular,
  width,
  height,
  $horizontalmargin,
  onClick,
}) => {
  return (
    <ImageContainer
      whileHover={{ scale: 1.1, cursor: "pointer", y: -30 }}
      onClick={onClick}
    >
      <Image
        src={image}
        alt="Hapkido"
        width={width}
        height={height}
        $imagecircular={$imagecircular}
        $horizontalmargin={$horizontalmargin}
      />
    </ImageContainer>
  );
};

const Image = styled.img<ImageProps>`
  width: ${({ width }) => width ?? "500px"};
  height: ${({ height }) => height ?? "100%"};
  ${({ $horizontalmargin }) =>
    $horizontalmargin ? `margin: 0 ${$horizontalmargin};` : ""}
  object-fit: contain;
  border-radius: ${({ $imagecircular }) => ($imagecircular ? "50%" : "0")};
`;

const ImageContainer = styled(motion.div)`
  margin: 20px auto;
`;

export default Card;
