import { useEffect, useState } from "react";
import { DeviceType } from "./useDeviceType";
import mobileTheme from "../themes/mobileTheme";
import tabletTheme from "../themes/tabletTheme";
import desktopTheme from "../themes/desktopTheme";

const useSelectTheme = (device: DeviceType) => {
  const [theme, setTheme] = useState<
    typeof mobileTheme | typeof tabletTheme | typeof desktopTheme
  >();
  useEffect(() => {
    switch (device) {
      case DeviceType.Mobile:
        setTheme(mobileTheme);
        break;
      case DeviceType.Tablet:
        setTheme(tabletTheme);
        break;
      case DeviceType.Desktop:
        setTheme(desktopTheme);
        break;
      default:
        setTheme(mobileTheme);
        break;
    }
  }, [device]);
  return theme;
};

export default useSelectTheme;
