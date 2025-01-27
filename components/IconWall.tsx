import React from "react";
import styled from "styled-components";
import { PageContainerAdjusted } from "./styled";
import IconProvider from "./IconProvider";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 0;
  width: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1<{ color?: string }>`
  color: ${({ color, theme }) => theme.colors[color || "black"]};
  margin: 1rem 0;
  text-align: center;
`;

const IconsGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

interface IconWallProps {
  name: string;
  collection: string[];
  fontColor?: string;
  showName?: boolean;
  bgColor?: string;
}

const IconWall: React.FC<IconWallProps> = React.memo(
  ({ name, collection, fontColor, showName = false, bgColor }) => {
    return (
      <PageContainerAdjusted $bgColor={bgColor}>
        <Container>
          <HeaderContainer>
            <Header color={fontColor}>{name}</Header>
          </HeaderContainer>
          <IconsGrid>
            {collection.map((icon, index) => (
              <IconProvider
                key={index}
                name={icon}
                $showName={showName}
                $color={fontColor}
              />
            ))}
          </IconsGrid>
        </Container>
      </PageContainerAdjusted>
    );
  }
);

IconWall.displayName = "IconWall";

export default IconWall;
