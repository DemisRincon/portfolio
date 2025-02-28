import React from "react";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { JSX } from "react";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiJest,
  SiContentful,
} from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import {
  TbBrandReactNative,
  TbBrandFramerMotion,
  TbBrandCucumber,
} from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { GiOwl } from "react-icons/gi";

interface IconProviderProps {
  name: string;
  $showName: boolean;
  $fontColor?: string;
  $size?: string;
}

const iconMap: Record<string, (color: string, size: string) => JSX.Element> = {
  react: (color, size) => <FaReact size={size} color={color} />,
  next: (color, size) => <RiNextjsFill size={size} color={color} />,
  "react native": (color, size) => (
    <TbBrandReactNative size={size} color={color} />
  ),
  "styled components": (color, size) => (
    <SiStyledcomponents size={size} color={color} />
  ),
  "framer motion": (color, size) => (
    <TbBrandFramerMotion size={size} color={color} />
  ),
  node: (color, size) => <FaNodeJs size={size} color={color} />,
  express: (color, size) => <SiExpress size={size} color={color} />,
  mongodb: (color, size) => <SiMongodb size={size} color={color} />,
  mysql: (color, size) => <GrMysql size={size} color={color} />,
  postman: (color, size) => <SiPostman size={size} color={color} />,
  newman: (color, size) => <SiPostman size={size} color={color} />,
  SiCucumber: (color, size) => <SiPostman size={size} color={color} />,
  jest: (color, size) => <SiJest size={size} color={color} />,
  github: (color, size) => <FaGithub size={size} color={color} />,
  netlify: (color, size) => <BiLogoNetlify size={size} color={color} />,
  contentful: (color, size) => <SiContentful size={size} color={color} />,
  cucumber: (color, size) => <TbBrandCucumber size={size} color={color} />,
  nightwatch: (color, size) => <GiOwl size={size} color={color} />,
};

const IconProvider: React.FC<IconProviderProps> = ({
  name,
  $showName = false,
  $fontColor = "white",
  $size,
}) => {
  const icon = iconMap[name] ? (
    iconMap[name]($fontColor, $size ?? "1em")
  ) : (
    <span>📚</span>
  );

  return (
    <div className="flex items-center w-full box-border lg:justify-center">
      {icon}
      {$showName && (
        <h2 className="ml-2 m-0 whitespace-nowrap overflow-clip text-white text-4xl">
          {name}
        </h2>
      )}
    </div>
  );
};

export default IconProvider;
