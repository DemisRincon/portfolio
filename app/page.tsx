"use client";

import { useEffect, useState } from "react";
import PageBuilder from "@/components/PageBuilder";
import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getPageBySlug } from "@/library/contentful/querys";
import { Fragment } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTool(
          getPageBySlug("/"),
          FetchType.staticData
        );
        setData(result);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <Fragment>
      <PageBuilder data={data} />
    </Fragment>
  );
};

export default Home;
