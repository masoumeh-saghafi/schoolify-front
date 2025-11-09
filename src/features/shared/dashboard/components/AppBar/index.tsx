// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Button from '@schoolify/core/components/base/inputs/Button'
import IconButton from '@schoolify/core/components/base/inputs/IconButton'
import Toolbar from '@schoolify/core/components/base/inputs/Toolbar'

// Icon Components
import { CloseIcon } from '@schoolify/core/components/icon/CloseIcon'
import { MenuIcon } from '@schoolify/core/components/icon/MenuIcon'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import useClientDeviceType from '@schoolify/core/hooks/common/useClientDeviceType'

// Core Components
import LogoTitle from '@schoolify/core/shared/Logo'

// Feature Components
import AppBar from '@schoolify/features/shared/layout/header/AppBar'
import UserProfileButton from '@schoolify/features/user/profile/needComponenet/UserProfileButton'

// Custom Types
export interface DashboardAppBarDataProps {
  title: string
  link: string
}

interface DashboardAppBarProps {
  open: boolean
  handleDrawerClose: () => void
  handleDrawerOpen: () => void

  data?: DashboardAppBarDataProps[]
}

const DashboardAppBar = (props: DashboardAppBarProps) => {
  // Props
  const { open, handleDrawerClose, handleDrawerOpen, data } = props

  // Hooks
  const theme = useAppTheme()
  const deviceType = useClientDeviceType()

  // Render
  return (
    <>
      <AppBar
        sx={{
          position: 'sticky',
          paddingX: {
            xs: '32px',
            md: '44px',
            backgroundColor: theme.palette.background.paper
          }
        }}
      >
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          {deviceType === 'mobile' && (
            
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              sx={{
                color: theme.palette.text.iconButton
              }}
              disableRipple={true}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            
          )}
          {deviceType === 'desktop' && (
         <UserProfileButton/>
          )}

          {data?.map(item => (
            <Button href={item.link}>{item.title}</Button>
          ))}

          <LogoTitle sx={{ fontSize: '1.4rem' }} />
        </Toolbar>
      </AppBar>
    </>
  )
}
export default DashboardAppBar
