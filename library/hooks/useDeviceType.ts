"use client";
import { useState, useEffect } from "react";

export enum DeviceType {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
}

const useDetectDevice = () => {
  const [deviceType, setDeviceType] = useState(() =>
    typeof window !== "undefined" ? getDeviceType() : DeviceType.Desktop
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (typeof window === "undefined") return;

  function getDeviceType() {
    const width = window.innerWidth;
    if (width < 768) {
      return DeviceType.Mobile;
    } else if (width < 1024) {
      return DeviceType.Tablet;
    } else {
      return DeviceType.Desktop;
    }
  }

  return deviceType;
};

export default useDetectDevice;
