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
import useIsMobile from "@/library/hooks/useIsMobile";

const desktopSize = "2rem";
const mobileSize = "2.5rem";

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const Name = styled.h4<{ color?: string; size: string }>`
  color: ${({ color, theme }) => theme.colors[color || "black"]};
  margin-left: 0.5rem;
  font-size: ${({ size }) => size};
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
  cucumber: (color, size) => (
    <Icon src={cucumbericon.src} size={size} color={color} />
  ),
  nightwatch: (color, size) => (
    <Icon src={nightwatchicon.src} size={size} color={color} />
  ),
};

const IconProvider: React.FC<IconProviderProps> = ({
  name,
  $showName = false,
  $color = "black",
}) => {
  const isMobile = useIsMobile();
  const icon = iconMap[name] ? (
    iconMap[name]($color, isMobile ? mobileSize : desktopSize)
  ) : (
    <span>📚</span>
  );

  return (
    <Wrapper>
      {icon}
      {$showName && (
        <Name color={$color} size={isMobile ? mobileSize : desktopSize}>
          {name}
        </Name>
      )}
    </Wrapper>
  );
};

export default IconProvider;
