import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
  useCallback,
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

const getScreenSizeFromWidth = (width: number): EScreenSize => {
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

  const handleResize = useCallback(() => {
    setScreenSize(getScreenSizeFromWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <ViewportContext.Provider value={{ screenSize }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = (): IViewport => {
  return useContext<IViewport>(ViewportContext);
};
