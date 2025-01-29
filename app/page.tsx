"use client";

import PageBuilder from "@/components/PageBuilder";
import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getPageBySlug } from "@/library/contentful/querys";
import { Fragment } from "react";

import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTool(getPageBySlug("/"), FetchType.dynamicData);
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <PageBuilder data={data} />
    </Fragment>
  );
};

export default Home;
