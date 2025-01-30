"use client";

import WrapperFadeIn from "@/components/Motion/WrapperFadeIn";
import { PageContainer } from "@/components/styled";
import {
  getHeroSideImageHead,
  HeroSideImageHeadType,
} from "@/library/contentful/HeroSideImageHead";
import React, { useEffect, useState, useCallback } from "react";
import {
  Container,
  TextContainer,
  SubHeading,
  Heading,
  Strong,
  ImageContainer,
  ProfileImage,
} from "./styled";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import useTransformOnScroll from "@/library/hooks/useParallax";

interface StaticProps {
  pagePath: string;
  order: number;
}

const useHeroSideImageHeadData = (pagePath: string, order: number) => {
  const [data, setData] = useState<HeroSideImageHeadType>({
    heading: "",
    subHeading: "",
    middleHeading: "",
    image: { url: "" },
    orderInPage: 0,
    bgColor: "",
    fontColor: "",
    sliceText: "",
    endHeading: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHeroSideImageHead(pagePath, order);
      setData(data);
    };
    fetchData();
  }, [order, pagePath]);

  return data;
};

const HeroSideImageHead: React.FC<StaticProps> = ({ pagePath, order }) => {
  const {
    heading,
    subHeading,
    middleHeading,
    image: { url },
    orderInPage,
    bgColor,
    fontColor,
    sliceText,
    endHeading,
  } = useHeroSideImageHeadData(pagePath, order);

  const [middleHeadingIndex, setMiddleHeadingIndex] = useState(0);
  const { y: yImage } = useTransformOnScroll([0, 1], [1, 0.7]);

  const updateMiddleHeadingIndex = useCallback(() => {
    setMiddleHeadingIndex(
      (prevIndex) => (prevIndex + 1) % middleHeading.length
    );
  }, [middleHeading.length]);

  useEffect(() => {
    const interval = setInterval(updateMiddleHeadingIndex, 3000);
    return () => clearInterval(interval);
  }, [updateMiddleHeadingIndex]);

  return (
    <PageContainer $bgColor={bgColor} $isFirstElement={orderInPage === 1}>
      <WrapperFadeIn>
        <Container>
          <TextContainer>
            <SubHeading>{subHeading}</SubHeading>
            <Heading $color={fontColor} $sliceText={!!sliceText}>
              {heading}{" "}
              <AnimatePresence mode="wait">
                <motion.div
                  key={middleHeading[middleHeadingIndex]}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.1 }}
                >
                  <Strong>{middleHeading[middleHeadingIndex]}</Strong>
                </motion.div>
              </AnimatePresence>{" "}
              {endHeading}
            </Heading>
          </TextContainer>

          {url && (
            <ImageContainer>
              <ProfileImage
                src={url}
                alt="Profile Photo"
                style={{ scale: yImage }}
              />
            </ImageContainer>
          )}
        </Container>
      </WrapperFadeIn>
    </PageContainer>
  );
};

export default HeroSideImageHead;
