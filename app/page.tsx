import { getPage } from "./actions";
import HeroSideImageHead from "@/components/HeroSideImageHead";

const Page = async () => {
  const [FaceWithPresentation] = await getPage();
  console.log(FaceWithPresentation);
  return (
    <>
      <HeroSideImageHead {...FaceWithPresentation} />
    </>
  );
};

export default Page;
