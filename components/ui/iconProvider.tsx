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
	react: (color, size) => (
		<FaReact size={size} color={color} aria-label="React" />
	),
	next: (color, size) => (
		<RiNextjsFill size={size} color={color} aria-label="Next.js" />
	),
	"react native": (color, size) => (
		<TbBrandReactNative
			size={size}
			color={color}
			aria-label="React Native"
		/>
	),
	"styled components": (color, size) => (
		<SiStyledcomponents
			size={size}
			color={color}
			aria-label="Styled Components"
		/>
	),
	"framer motion": (color, size) => (
		<TbBrandFramerMotion
			size={size}
			color={color}
			aria-label="Framer Motion"
		/>
	),
	node: (color, size) => (
		<FaNodeJs size={size} color={color} aria-label="Node.js" />
	),
	express: (color, size) => (
		<SiExpress size={size} color={color} aria-label="Express" />
	),
	mongodb: (color, size) => (
		<SiMongodb size={size} color={color} aria-label="MongoDB" />
	),
	mysql: (color, size) => (
		<GrMysql size={size} color={color} aria-label="MySQL" />
	),
	postman: (color, size) => (
		<SiPostman size={size} color={color} aria-label="Postman" />
	),
	newman: (color, size) => (
		<SiPostman size={size} color={color} aria-label="Newman" />
	),
	SiCucumber: (color, size) => (
		<SiPostman size={size} color={color} aria-label="Cucumber" />
	),
	jest: (color, size) => (
		<SiJest size={size} color={color} aria-label="Jest" />
	),
	github: (color, size) => (
		<FaGithub size={size} color={color} aria-label="GitHub" />
	),
	netlify: (color, size) => (
		<BiLogoNetlify size={size} color={color} aria-label="Netlify" />
	),
	contentful: (color, size) => (
		<SiContentful size={size} color={color} aria-label="Contentful" />
	),
	cucumber: (color, size) => (
		<TbBrandCucumber size={size} color={color} aria-label="Cucumber" />
	),
	nightwatch: (color, size) => (
		<GiOwl size={size} color={color} aria-label="Nightwatch" />
	),
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
		<span role="img" aria-label="Book">
			📚
		</span>
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
