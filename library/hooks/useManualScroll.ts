import { useEffect } from "react";

if (typeof window !== "undefined" && typeof window.scrollTo !== "function") {
  window.scrollTo = () => {};
}

const useManualScroll = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  useEffect(() => {
    const currentScrollY = window.scrollY;

    return () => {
      window.scrollTo(0, currentScrollY);
    };
  }, []);
};

export default useManualScroll;
