"use client";

import PageBuilder from "@/components/PageBuilder";
import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getPageBySlug } from "@/library/contentful/querys";
import { Fragment } from "react";
const Projects = () => {
  const data = fetchTool(getPageBySlug("/projects"), FetchType.staticData);
  return (
    <Fragment>
      <PageBuilder data={data} />
    </Fragment>
  );
};

export default Projects;
