import { useEffect, useRef, useState, useCallback } from "react";

const useScrollOnView = () => {
  const getHashFromUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.hash.substring(1);
    }
    return null;
  };

  const targetRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [urlFragment, setUrlFragment] = useState<string | null>(
    getHashFromUrl()
  );
  const scrollToView = useCallback(() => {
    if (urlFragment && targetRef.current) {
      const id = targetRef.current.id;

      if (urlFragment === id) {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  }, [urlFragment, targetRef]);

  useEffect(() => {
    const handleHashChange = () => {
      setUrlFragment(getHashFromUrl());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [scrollToView]);

  useEffect(() => {
    if (isMounted) {
      scrollToView();
    }
  }, [isMounted, urlFragment, targetRef, scrollToView]);

  useEffect(() => {
    setIsMounted(true);
    scrollToView(); // Ensure scrolling on initial render
  }, [scrollToView]);

  return targetRef;
};

export default useScrollOnView;
