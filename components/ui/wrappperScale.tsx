"use client";
import useTransformOnScroll from "../../hooks/useTransformOnScroll";
import { motion } from "framer-motion";
interface WrappperScaleProps {
  children?: React.ReactNode;
  className?: string;
  arr1?: number[];
  arr2?: number[];
}
const WrappperScale = ({
  children,
  className,
  arr1 = [0, 0.4, 1],
  arr2 = [0.5, 1, 1],
}: WrappperScaleProps) => {
  const { y: scale, ref } = useTransformOnScroll(arr1, arr2);
  return (
    <motion.div style={{ scale }} className={`${className}`} ref={ref}>
      {children}
    </motion.div>
  );

  return <div>WrappperScale</div>;
};

export default WrappperScale;
