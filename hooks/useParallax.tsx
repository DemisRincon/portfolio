import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const useParallax = (array1 = [0, 1], array2 = [0, 400]) => {
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });
  const y = useTransform(scrollYProgress, array1, array2);
  return { y };
};

export default useParallax;
