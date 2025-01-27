"use client";
import styled from "styled-components";
import Menu from "./Menu";
import withClientValidation from "@/library/hoc/ClientComponent";
import { FC } from "react";

const name = "Demis Rincon";

const Header: FC = () => (
  <HeaderContainer>
    <Title>{name}</Title>
    <Menu />
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 80px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1000;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;

export default withClientValidation(Header);
