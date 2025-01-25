"use client";
import styled from "styled-components";

export const PageContainer = styled.div<{ $bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  ${({ $bgColor, theme }) =>
    $bgColor && `background-color: ${theme.colors[$bgColor]};`}
`;
