"use client";
import styled from "styled-components";
import Menu from "./Menu";

const name = "Demis Rincon";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>{name}</Title>
      <Menu />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.black};
`;

export default Header;
