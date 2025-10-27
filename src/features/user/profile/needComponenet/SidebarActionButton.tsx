// MUI Components
import type { SxProps, Theme } from '@mui/material'
import Button from '@schoolify/core/components/base/inputs/Button'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// React Types
import type { ReactNode } from 'react'

// Custom Types
interface ActionButtonProps {
  label: string
  onClick: () => void
  icon?: ReactNode
  sx?: SxProps<Theme>
  isMobile?: boolean
}

const ActionButton = (props: ActionButtonProps) => {
  // Props
  const { label, onClick, icon, sx, isMobile } = props

  // Hooks
  const theme = useAppTheme()

  // Render
  return (
    <Button
      variant='outlined'
      onClick={onClick}
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        m: 1,
        mb: !isMobile ? 2 : undefined,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        ...sx
      }}
    >
      {icon}
      {label}
    </Button>
  )
}

export default ActionButton
