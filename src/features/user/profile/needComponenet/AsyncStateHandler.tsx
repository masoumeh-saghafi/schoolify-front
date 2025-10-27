// MUI Components
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@schoolify/core/components/base/inputs/Box'
import Typography from '@schoolify/core/components/base/inputs/Typography'

// React Types
import React from 'react'

// Custom Types
interface AsyncStateHandlerProps {
  isLoading: boolean
  error: any
  children: React.ReactNode
}

const AsyncStateHandler = (props: AsyncStateHandlerProps) => {
  // Props
  const { isLoading, error, children } = props

  if (isLoading) {

    // Render
    return (
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <CircularProgress size={28} />
        <Typography sx={{ mt: 1 }}>در حال بارگذاری...</Typography>
      </Box>
    )
  }

  if (error) {
    return (
      <Typography sx={{ textAlign: 'center', p: 2, color: 'error.main' }}>
        خطا در دریافت اطلاعات
      </Typography>
    )
  }

  return <>{children}</>
}

export default AsyncStateHandler
