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
import styled from "styled-components";
import { useTheme } from "styled-components";
import { GiOwl } from "react-icons/gi";

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const Name = styled.h4`
  margin: 0;
  margin-left: 0.5rem;
  white-space: nowrap;
  text-overflow: clip;
`;

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
  const theme = useTheme();
  const icon = iconMap[name] ? (
    iconMap[name]($fontColor, $size ?? theme.fontSizes.icon)
  ) : (
    <span>📚</span>
  );

  return (
    <Wrapper>
      {icon}
      {$showName && <Name>{name}</Name>}
    </Wrapper>
  );
};

export default IconProvider;
