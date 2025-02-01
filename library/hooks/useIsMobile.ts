import { useState, useEffect, useCallback } from "react";

const debounce = (
  func: (...args: unknown[]) => void,
  wait: number
): ((...args: unknown[]) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 1024);
  }, []);

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 200);
    debouncedHandleResize();
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [handleResize]);

  return isMobile;
};

export default useIsMobile;
