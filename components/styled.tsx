"use client";
import styled from "styled-components";

interface PageContainerProps {
  $bgColor?: string;
  $isFirstElement?: boolean;
}

export const PageContainer = styled.div<PageContainerProps>`
  ${({ $isFirstElement }) => $isFirstElement && `margin-top: 100px;`}
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  margin: 0;
  ${({ $bgColor, theme }) =>
    $bgColor && `background-color: ${theme.colors[$bgColor]};`}
`;

export const PageContainerAdjusted = styled(PageContainer)`
  height: auto;
`;
