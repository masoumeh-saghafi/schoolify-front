import useClientDeviceType from '@schoolify/core/hooks/common/useClientDeviceType'

// Contex
export function useClientDeviceTypeIsMobile () {
  const deviceType = useClientDeviceType()
  return deviceType === 'mobile'
}

export default useClientDeviceTypeIsMobile
