export enum FetchType {
  staticData = "staticData",
  dynamicData = "dynamicData",
  revalidatedData = "revalidatedData",
}

const fetchTool = async (query: string, type: FetchType) => {
  let complement: RequestInit = { cache: "force-cache" as RequestCache };
  switch (type) {
    case FetchType.staticData:
      complement = { cache: "force-cache" as RequestCache };
      break;
    case FetchType.dynamicData:
      complement = { cache: "no-cache" as RequestCache };
      break;
    case FetchType.revalidatedData:
      complement = { next: { revalidate: 10 } };
      break;
    default:
      return (complement = { cache: "force-cache" as RequestCache });
  }

  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
      ...complement,
    }
  );

  if (!result.ok) {
    return {
      error: result.statusText,
    };
  }

  const { data } = await result.json();
  return data;
};
export default fetchTool;
