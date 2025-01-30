"use client";
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
  height: 100vh;
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
