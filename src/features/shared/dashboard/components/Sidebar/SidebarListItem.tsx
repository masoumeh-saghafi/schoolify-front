// React Type
import { useState } from 'react'

//Type Definitions
import type { JSX } from '@emotion/react/jsx-runtime'

// MUI Components
import Typography from '@schoolify/core/components/base/inputs/Typography'
import ListItem from '@schoolify/core/components/base/inputs/ListItem'
import ListItemText from '@schoolify/core/components/base/inputs/ListItemText'
import List from '@schoolify/core/components/base/inputs/List'

// Feature Components
import SidebarButton from '@schoolify/features/shared/dashboard/components/Sidebar/SidebarButton'

// Custom Utilities
import { genUUID } from '@schoolify/core/utilities/uuid'

// Icon Components
import { ArrowDownIcon } from '@schoolify/core/components/icon/ArrowDownIcon'
import { ArrowUpIcon } from '@schoolify/core/components/icon/ArrowUpIcon'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

export type SidebarItemType = 'text' | 'listItem' | 'contentBox'

// Base shared interface
interface SidebarBaseItem {
  key?: string
  title: string
  link?: string
  icon?: JSX.Element | null
  type?: SidebarItemType
  onClick?: () => void
  isActive?: boolean
  enableBorder?: boolean
  disabled?: boolean
  nested?: boolean
}

// Custom Types
export interface SidebarListItemProps extends SidebarBaseItem {
  children?: SidebarListItemChildrenProps[] // recursive type
}

export type SidebarListItemChildrenProps = SidebarBaseItem

const SidebarListItem = (props: SidebarListItemProps) => {
  // Props
  const {
    title,
    link,
    icon,
    onClick,
    isActive,
    enableBorder = true,
    disabled = false,
    nested = false,
    children,
    type
  } = props

  // States
  const [open, setOpen] = useState<boolean>(false)

  // Hooks
  const theme = useAppTheme()

  // Handlers
  const onClickToggleOpenHandler = () => {
    setOpen(!open)
  }

  // Render
  return (
    <>
      {type === 'text' && (
        <Typography
          sx={{
            mx: 3,
            my: 2,
            display: 'block',
            textWrap: 'nowrap',
            fontSize: '0.85rem'
          }}
        >
          {title}
        </Typography>
      )}

      {type === 'listItem' && (
        <>
          <List sx={{ px: 1 }}>
            <ListItem
              key={genUUID()}
              sx={{ mx: 1, px: nested ? 2 : 0 }}
              onClick={onClickToggleOpenHandler}
            >
              <SidebarButton
                onClick={onClick}
                href={link}
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
                  {title}
                </ListItemText>

                {children && (open ? <ArrowDownIcon /> : <ArrowUpIcon />)}
              </SidebarButton>
            </ListItem>
          </List>

          {open &&
            children &&
            children.map(({ key, ...item }) => (
              <SidebarListItem key={key ?? genUUID()} {...item} nested={true} />
            ))}
        </>
      )}

      {type === 'contentBox' && (
        <>
          <List sx={{ px: 1 }}>
            <ListItem
              key={genUUID()}
              sx={{
                mx: 1,
                px: nested ? 3 : 0,
                backgroundColor: theme.palette.background.card
              }}
            >
              <SidebarButton
                onClick={onClick}
                href={link}
                isActive={isActive}
                enableBorder={enableBorder}
                disabled={disabled}
              >
                {icon}
                <ListItemText
                  sx={{
                    display: 'block',
                    textWrap: 'nowrap',
                    textAlign: 'center',
                    ml: 1
                  }}
                >
                  {title}
                </ListItemText>
              </SidebarButton>
            </ListItem>
          </List>
        </>
      )}
    </>
  )
}

export default SidebarListItem
