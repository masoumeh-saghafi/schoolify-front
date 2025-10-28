import useClientDeviceType from "./useClientDeviceType";

// Contex
export function useClientDeviceTypeIsMobile() {
  const deviceType = useClientDeviceType();
  return deviceType === "mobile";
}

export default useClientDeviceTypeIsMobile;
