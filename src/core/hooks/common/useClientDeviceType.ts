import { useMediaQuery } from '@mui/material'
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// Contex
export function useClientDeviceType () {
  const theme = useAppTheme()

  // Mobile
  if (useMediaQuery(theme.breakpoints.down('md'))) {
    return 'mobile'
  }
  return 'desktop'
}

export default useClientDeviceType
