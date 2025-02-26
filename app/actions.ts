"use server";

import fetchTool, { FetchType } from "@/library/contentful/fetchTool";
import { getPageBySlug } from "@/library/contentful/querys";

export async function getPage() {
  const data = await fetchTool(getPageBySlug("/"), FetchType.staticData);
  return data.pageCollection.items[0].blocksCollection.items;
}
