"use client";
import styled from "styled-components";

interface PageContainerProps {
  $bgColor?: string;
}

export const PageContainer = styled.div<PageContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  ${({ $bgColor, theme }) =>
    $bgColor && `background-color: ${theme.colors[$bgColor]};`}
`;
