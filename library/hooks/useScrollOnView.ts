import { useEffect, useRef, useState } from "react";

const useScrollOnView = () => {
  const getHashFromUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.hash.substring(1);
    }
    return null;
  };

  const [urlFragment, setUrlFragment] = useState(getHashFromUrl());

  useEffect(() => {
    const handleHashChange = () => {
      setUrlFragment(getHashFromUrl());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  return targetRef;
};

export default useScrollOnView;
