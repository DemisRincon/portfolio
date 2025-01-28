import React, { useEffect, useState } from "react";
import { PageContainerAdjusted } from "./styled";
import styled from "styled-components";
import WrapperFadeIn from "./Motion/WrapperFadeIn";
import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getImageCarousel } from "@/library/contentful/querys";
import InfiniteCarousel, {
  ImageItemInterface,
} from "./Motion/InfiniteCarousel";

interface CarrouseImageWithLinkProps {
  title: string;
  slug: string;
  name: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const CarrouseImageWithLink: React.FC<CarrouseImageWithLinkProps> = ({
  title,
  slug,
  name,
}) => {
  const [data, setData] = useState<ImageItemInterface[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTool(
        getImageCarousel(slug),
        FetchType.dynamicData
      );

      setData(data.imageCarouselWithLinks.imagesCollection.items);
    };
    fetchData();
  }, [slug]);

  return (
    <PageContainerAdjusted>
      <WrapperFadeIn>
        <Container title={title}>
          <h1>{name}</h1>
          {data && <InfiniteCarousel data={data} />}
        </Container>
      </WrapperFadeIn>
    </PageContainerAdjusted>
  );
};

export default CarrouseImageWithLink;
