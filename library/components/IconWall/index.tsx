import React, { useMemo, useCallback } from "react";
import styled from "styled-components";
import IconProvider from "./IconProvider";
import useTransformOnScroll from "@/library/hooks/useTransformOnScroll";
import { motion } from "framer-motion";

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
const IconWall: React.FC<IconWallProps> = React.memo(
  ({ name, collectionString, showName = false }) => {
    const { y: scale } = useTransformOnScroll([0, 0.7, 1], [0.3, 1, 1.3]);

    const renderIcon = useCallback(
      (icon: string, index: number) => (
        <IconProvider key={index} name={icon} $showName={showName} />
      ),
      [showName]
    );

    const renderedIcons = useMemo(
      () => collectionString.map(renderIcon),
      [collectionString, renderIcon]
    );

    return (
      <Container>
        <HeaderContainer>
          <Header>{name}</Header>
        </HeaderContainer>
        <ContainerGrid>
          <IconsGrid style={{ scale }}>{renderedIcons}</IconsGrid>
        </ContainerGrid>
      </Container>
    );
  }
);

IconWall.displayName = "IconWall";

export default IconWall;
