"use client";
import styled from "styled-components";

export const PageContainer = styled.div<{ $bgColor?: string }>`
  display: flex;
  ${(props) =>
    props.$bgColor &&
    `background-color: ${props.theme.colors[props.$bgColor]};`}
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
