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
  max-width: 100%;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 2rem;
  text-align: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4rem;
  }
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
          <Header>{name}</Header>
          {data && <InfiniteCarousel data={data} />}
        </Container>
      </WrapperFadeIn>
    </PageContainerAdjusted>
  );
};

export default CarrouseImageWithLink;
