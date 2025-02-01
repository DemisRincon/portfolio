"use client";
import { useEffect, useState, useRef } from "react";
import fetchTool, { FetchType } from "../contentful/fetchTool";
import { getPageBySlug } from "../contentful/querys";
import { usePathname } from "next/navigation";

const useGetPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<unknown>(null);
  const path = usePathname();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (prevPathRef.current !== path) {
      const fetchData = async () => {
        try {
          const result = await fetchTool(
            getPageBySlug(path),
            FetchType.staticData
          );
          setData(result.pageCollection.items[0].blocksCollection.items);
        } catch (err) {
          setError(err);
        }
      };

      fetchData();
      prevPathRef.current = path;
    }
  }, [path]);

  if (data) {
    return { data, error };
  }
  return null;
};

export default useGetPage;
