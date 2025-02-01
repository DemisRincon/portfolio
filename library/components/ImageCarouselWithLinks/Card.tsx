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

const Card: React.FC<CardProps> = React.memo(function Card({
  image,
  $imagecircular,
  width,
  height,
  $horizontalmargin,
  onClick,
}) {
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
});

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
