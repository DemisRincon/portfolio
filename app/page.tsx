"use client";

import IconWall from "@/components/IconWall";
import PageBuilder from "@/components/PageBuilder";
import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getPageBySlug } from "@/library/contentful/querys";
import { Fragment } from "react";

const Home = () => {
  const data = fetchTool(getPageBySlug("/"), FetchType.dynamicData);
  return (
    <Fragment>
      <PageBuilder data={data} />
    </Fragment>
  );
};

export default Home;
