"use client";

import { useEffect, useState } from "react";
import PageBuilder from "@/components/PageBuilder";
import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getPageBySlug } from "@/library/contentful/querys";
import { Fragment } from "react";

const Projects = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTool(
          getPageBySlug("/projects"),
          FetchType.staticData
        );
        setData(result);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
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

export default Projects;
