import { useScroll, useTransform } from "framer-motion";

const useTransformOnScroll = (array1 = [0, 1], array2 = [0, 400]) => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, array1, array2);
  return { y };
};

export default useTransformOnScroll;
