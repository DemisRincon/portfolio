import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";

export enum EScreenSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
  XXL = "xxl",
}

interface IViewport {
  screenSize: EScreenSize;
}

const getScreenSizeFromWidth = (width: number) => {
  if (width < 576) return EScreenSize.XS;
  if (width < 768) return EScreenSize.SM;
  if (width < 992) return EScreenSize.MD;
  if (width < 1200) return EScreenSize.LG;
  if (width < 1400) return EScreenSize.XL;
  return EScreenSize.XXL;
};

const ViewportContext = createContext<IViewport>({
  screenSize: getScreenSizeFromWidth(
    typeof window !== "undefined" ? window.innerWidth : 0
  ),
});

interface ViewportProviderProps {
  children: React.ReactNode;
}

export const ViewportProvider: FC<ViewportProviderProps> = ({ children }) => {
  const [screenSize, setScreenSize] = useState(
    getScreenSizeFromWidth(
      typeof window !== "undefined" ? window.innerWidth : 0
    )
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSizeFromWidth(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ screenSize }}>
      {children}
    </ViewportContext.Provider>
  );
};

export function useViewport() {
  return useContext<IViewport>(ViewportContext);
}
