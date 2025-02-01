"use client";
import { useState, useEffect, useCallback, useMemo } from "react";

export enum DeviceType {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
}

const useDetectDevice = () => {
  const getDeviceType = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) {
      return DeviceType.Mobile;
    } else if (width < 1024) {
      return DeviceType.Tablet;
    } else {
      return DeviceType.Desktop;
    }
  }, []);

  const initialDeviceType = useMemo(() => {
    return typeof window !== "undefined" ? getDeviceType() : DeviceType.Desktop;
  }, [getDeviceType]);

  const [deviceType, setDeviceType] = useState(initialDeviceType);

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getDeviceType]);

  return deviceType;
};

export default useDetectDevice;
