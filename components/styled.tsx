"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

interface PageContainerProps {
  $bgColor?: string;
  $isFirstElement?: boolean;
  $fontColor?: string;
}

export const PageContainer = styled.div<PageContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $isFirstElement }) =>
    $isFirstElement ? "calc(100vh - 60px)" : "100vh"};
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 0;

  ${({ $isFirstElement }) => $isFirstElement && `margin-top: 60px;`}

  ${({ $bgColor, theme }) =>
    $bgColor && `background-color: ${theme.colors[$bgColor]};`}
`;

export const PageContainerAdjusted = styled(PageContainer)`
  height: auto;
  overflow: hidden;
`;

export const PageFreeSpace = styled(PageContainer)`
  max-height: none;
  flex: 1;
`;

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
