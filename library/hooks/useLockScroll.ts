import { useEffect, useRef } from "react";

const useLockScroll = () => {
  const originalStyle = useRef<string | null>(null);

  useEffect(() => {
    originalStyle.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle.current || "auto";
    };
  }, []);
};

export default useLockScroll;
