// MUI Components
import ListItem from '@schoolify/core/components/base/inputs/ListItem'
import ListItemText from '@schoolify/core/components/base/inputs/ListItemText'
import List from '@schoolify/core/components/base/inputs/List'

// Feature Components
import SidebarButton from '@schoolify/features/shared/dashboard/components/Sidebar/SidebarButton'

//Type Definitions
import type { JSX } from '@emotion/react/jsx-runtime'
import Box from '@schoolify/core/components/base/inputs/Box'

// Custom Types
interface SidebarListItemProps {
  text: string
  href?: string
  icon?: JSX.Element
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
    href,
    icon,
    onClick,
    isActive,
    enableBorder = true,
    disabled = false,
    nested = false
  } = props

  // Hooks
  // const navigate = useNavigate();

  // Render
  return (


    <List sx={{ px: 1 }}>
      <ListItem disablePadding sx={{ mx: 1, pl: nested ? 4 : 0 }}>
        <SidebarButton
          onClick={onClick}
          href={href}
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
    </List>
      
  )
}

export default SidebarListItem
