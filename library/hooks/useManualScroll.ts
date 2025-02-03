import { useEffect } from "react";

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
