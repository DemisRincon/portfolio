import { useEffect, useRef } from "react";

const useScrollOnView = () => {
  const getHashFromUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.hash.substring(1);
    }
    return null;
  };

  const urlFragment = getHashFromUrl();

  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (urlFragment && targetRef.current) {
      const id = targetRef.current.id;
      console.log(urlFragment, id);
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
