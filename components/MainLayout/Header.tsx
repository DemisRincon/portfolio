"use client";
import styled from "styled-components";
import Menu from "./Menu";
import withClientValidation from "@/library/hoc/ClientComponent";

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
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.black};
`;

export default withClientValidation(Header);
