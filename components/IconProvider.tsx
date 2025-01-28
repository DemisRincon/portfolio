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
import { TbBrandReactNative, TbBrandFramerMotion } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import styled from "styled-components";
import cucumbericon from "@/library/assets/icons/cucumber.svg";
import nightwatchicon from "@/library/assets/icons/nightwatch.svg";
import SVG from "react-inlinesvg";

const size = "2rem";

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const Name = styled.h4<{ color?: string }>`
  color: ${({ color, theme }) => theme.colors[color || "black"]};
  margin-left: 0.5rem;
  font-size: ${size};
  white-space: nowrap;
  text-overflow: clip;
`;

interface IconProviderProps {
  name: string;
  $showName: boolean;
  $color?: string;
}

const Icon = styled(SVG)<{ size: string; color: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  & path {
    fill: ${({ color }) => color};
  }
`;

const iconMap: Record<string, (color: string) => JSX.Element> = {
  react: (color) => <FaReact size={size} color={color} />,
  next: (color) => <RiNextjsFill size={size} color={color} />,
  "react native": (color) => <TbBrandReactNative size={size} color={color} />,
  "styled components": (color) => (
    <SiStyledcomponents size={size} color={color} />
  ),
  "framer motion": (color) => <TbBrandFramerMotion size={size} color={color} />,
  node: (color) => <FaNodeJs size={size} color={color} />,
  express: (color) => <SiExpress size={size} color={color} />,
  mongodb: (color) => <SiMongodb size={size} color={color} />,
  mysql: (color) => <GrMysql size={size} color={color} />,
  postman: (color) => <SiPostman size={size} color={color} />,
  newman: (color) => <SiPostman size={size} color={color} />,
  SiCucumber: (color) => <SiPostman size={size} color={color} />,
  jest: (color) => <SiJest size={size} color={color} />,
  github: (color) => <FaGithub size={size} color={color} />,
  netlify: (color) => <BiLogoNetlify size={size} color={color} />,
  contentful: (color) => <SiContentful size={size} color={color} />,
  cucumber: (color) => (
    <Icon src={cucumbericon.src} size={size} color={color} />
  ),
  nightwatch: (color) => (
    <Icon src={nightwatchicon.src} size={size} color={color} />
  ),
};

const IconProvider: React.FC<IconProviderProps> = ({
  name,
  $showName = false,
  $color = "black",
}) => {
  const icon = iconMap[name] ? iconMap[name]($color) : <span>📚</span>;

  return (
    <Wrapper>
      {icon}
      {$showName && <Name color={$color}>{name}</Name>}
    </Wrapper>
  );
};

export default IconProvider;
