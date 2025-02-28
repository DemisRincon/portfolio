"use client";
import React from "react";
import IconProvider from "./ui/iconProvider";
import useTransformOnScroll from "../hooks/useTransformOnScroll";
import { motion } from "framer-motion";
import WrapperFadeIn from "./ui/wrapperFadeIn";

interface IconWallProps {
  name: string;
  collectionString: string[];
  showName?: boolean;
}

const IconWall: React.FC<IconWallProps> = ({
  name,
  collectionString,
  showName = false,
}) => {
  const { y: scale, ref } = useTransformOnScroll([0, 0.7, 1], [0.5, 1, 1]);

  const renderIcon = (icon: string, index: number) => (
    <WrapperFadeIn
      key={index}
      transition={{ duration: 0.6, delay: (index + 1) * 0.15 }}
    >
      <IconProvider name={icon} $showName={showName} $size="40" />
    </WrapperFadeIn>
  );

  const renderedIcons = collectionString.map(renderIcon);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-16 w-full"
    >
      <div className="flex items-center justify-center">
        <WrapperFadeIn>
          <h3 className="mb-12 text-center text-white text-5xl">{name}</h3>
        </WrapperFadeIn>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div
          className="grid items-center justify-center w-full gap-4 md:w-9/10 md:grid-cols-2 lg:grid-cols-5"
          style={{ scale }}
        >
          {renderedIcons}
        </motion.div>
      </div>
    </div>
  );
};

IconWall.displayName = "IconWall";

export default IconWall;
