import React from "react";
import styled from "styled-components";
import IconProvider from "./IconProvider";
import useTransformOnScroll from "@/library/hooks/useTransformOnScroll";
import { motion } from "framer-motion";
import WrapperFadeIn from "../WrapperFadeIn";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h3`
  margin: 1rem 0;
  text-align: center;
`;

const ContainerGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const IconsGrid = styled(motion.div)`
  display: grid;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

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
      <IconProvider name={icon} $showName={showName} />
    </WrapperFadeIn>
  );

  const renderedIcons = collectionString.map(renderIcon);

  return (
    <Container ref={ref}>
      <HeaderContainer>
        <WrapperFadeIn>
          <Header>{name}</Header>
        </WrapperFadeIn>
      </HeaderContainer>
      <ContainerGrid>
        <IconsGrid style={{ scale }}>{renderedIcons}</IconsGrid>
      </ContainerGrid>
    </Container>
  );
};

IconWall.displayName = "IconWall";

export default IconWall;
