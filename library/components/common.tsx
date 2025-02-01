import { motion } from "motion/react";
import styled from "styled-components";

interface ButtonProps {
  $bgColor?: string;
  $color?: string;
}

export const Button = styled(motion.button)<ButtonProps>`
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme, $bgColor }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.teal};
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.7rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  padding-top: 80px;
  border: 1px solid black;
`;
