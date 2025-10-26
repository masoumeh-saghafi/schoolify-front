// MUI Components
import ListItem from '@schoolify/core/components/base/inputs/ListItem'
import SidebarButton from '@schoolify/features/shared/dashboard/components/SidebarButton'
import ListItemText from '@schoolify/core/components/base/inputs/ListItemText'

// React Types
import type { ReactNode } from 'react'

// Custom Types
interface SidebarListItemProps {
  text: string
  icon?: ReactNode
  onClick?: () => void
  isActive?: boolean
  enableBorder?: boolean
  disabled?: boolean
  nested?: boolean
}

const SidebarListItem = (props: SidebarListItemProps) => {
  // Props
  const {
    text,
    icon,
    onClick,
    isActive,
    enableBorder = true,
    disabled = false,
    nested = false
  } = props

  // Render
  return (
    <ListItem disablePadding sx={{ mb: 1, pl: nested ? 4 : 0 }}>
      <SidebarButton
        onClick={onClick}
        isActive={isActive}
        enableBorder={enableBorder}
        disabled={disabled}
      >
        {icon}
        <ListItemText
          sx={{
            display: 'block',
            textWrap: 'nowrap',
            textAlign: 'left',
            ml: 1
          }}
        >
          {text}
        </ListItemText>
      </SidebarButton>
    </ListItem>
  )
}

export default SidebarListItem
