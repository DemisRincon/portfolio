import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  width: 100%;
  min-width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  padding: 0;
  white-space: nowrap;
  text-overflow: clip;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: space-around;
    flex-direction: row;
  }
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100%;
    width: 40%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 30%;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: justify;
    font-size: 2.2rem;
  }
`;

export const Heading = styled.h1<{ $color?: string; $sliceText?: boolean }>`
  color: ${({ theme, $color }) =>
    $color ? theme.colors[$color] : theme.colors.black};
  box-sizing: border-box;
  font-size: 2.3rem;
  width: 100%;
  display: flex;
  white-space: nowrap;
  text-overflow: clip;
  ${({ $sliceText }) => $sliceText && `flex-direction: column;`}
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.h1};
    padding-top: 30px;
  }
`;

export const Strong = styled(motion.strong)`
  margin: 0 0 0 0.5rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 70%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 100%;
    width: 40%;
  }
`;

export const ProfileImage = styled(motion.img)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  position: relative;
  max-width: 80%;
  max-height: 80%;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
`;
