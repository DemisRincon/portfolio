"use client";

import PageBuilder from "@/components/PageBuilder";
import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getPageBySlug } from "@/library/contentful/querys";

const Home = () => {
  const data = fetchTool(getPageBySlug("/"), FetchType.dynamicData);
  return (
    <>
      <PageBuilder data={data} />
    </>
  );
};

export default Home;
