import { motion } from "motion/react";
import styled from "styled-components";

interface ButtonProps {
  $bgColor?: string;
  $color?: string;
}

export const Button = styled(motion.button)<ButtonProps>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme, $bgColor }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.teal};
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.white};

  &:hover {
    cursor: pointer;
  }
`;

export const PageContainer = styled.div<{
  $bgColor?: string;
  $fontColor?: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme, $bgColor }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.white};
  color: ${({ theme, $fontColor }) =>
    $fontColor ? theme.colors[$fontColor] : theme.colors.black};
`;

export const PageContainerAdjusted = styled(PageContainer)<{
  $bgColor?: string;
  $fontColor?: string;
}>`
  height: auto;
  overflow: hidden;
  background-color: ${({ theme, $bgColor }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.white};
  color: ${({ theme, $fontColor }) =>
    $fontColor ? theme.colors[$fontColor] : theme.colors.black};
`;

export const PageFreeSpace = styled(PageContainer)<{
  $bgColor?: string;
  $fontColor?: string;
}>`
  max-height: none;
  width: 100%;
  background-color: ${({ theme, $bgColor }) =>
    $bgColor ? theme.colors[$bgColor] : theme.colors.white};
  color: ${({ theme, $fontColor }) =>
    $fontColor ? theme.colors[$fontColor] : theme.colors.black};
`;
