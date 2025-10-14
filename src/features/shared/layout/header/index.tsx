import React from 'react'
import { useLocation } from 'react-router-dom'

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import HeaderMobileDrawer from '@schoolify/features/shared/layout/header/MobileDrawer'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// Core Components
import Button from '@schoolify/core/components/base/inputs/Button'
import Logo from '@schoolify/core/shared/Logo'

// Feature Components
import AppBar from '@schoolify/features/shared/layout/header/AppBar'

// Icon Components
import { MenuIcon } from '@schoolify/core/components/icon/MenuIcon'
import { CloseIcon } from '@schoolify/core/components/icon/CloseIcon'

// Custom Utilities
import headerButtonsData from '@schoolify/features/user/landing/utilities/header'

const Header = () => {
  // Hooks
  const location = useLocation()
  const theme = useAppTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  // States
  const [open, setOpen] = React.useState(!isMobile)

  // Handlers
  const handleDrawerClose = () => setOpen(false)

  // Helpers
  const isActive = (link: string) => location.pathname === link

  // Render
  return (
    <>
      <AppBar position='fixed' sx={{ paddingX: { xs: '32px', md: '44px' } }}>
        <Box>
          <Toolbar disableGutters>
            {/* Mobile Menu Button + Drawer  */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <IconButton
                size='large'
                onClick={() => setOpen(!open)}
                edge='end'
                sx={{ color: theme.palette.text.iconButton }}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <HeaderMobileDrawer
                collapsedDrawerWidth={0}
                drawerWidth={240}
                open={isMobile ? open : false}
                onClose={handleDrawerClose}
              >
                {headerButtonsData.map(page => (
                  <Button
                    href={page.link}
                    key={page.title}
                    onClick={handleDrawerClose}
                    sx={{
                      mx: 1,
                      mt: 2,
                      color: isActive(page.link)
                        ? theme.palette.text.white
                        : theme.palette.text.primary,

                      backgroundColor: isActive(page.link)
                        ? theme.palette.primary.main
                        : 'transparent',
                      borderRadius: 2
                    }}
                  >
                    {page.title}
                  </Button>
                ))}
              </HeaderMobileDrawer>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' }
              }}
            >
              {headerButtonsData.map(page => (
                <Button
                  href={page.link}
                  key={page.title}
                  sx={{
                    color: isActive(page.link)
                      ? theme.palette.text.white
                      : theme.palette.text.primary,
                    backgroundColor: isActive(page.link)
                      ? theme.palette.primary.main
                      : 'transparent',
                    ml: 1,
                    borderRadius: 2,
                    px: 2
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            {/* Logo */}
            <Logo sx={{ fontSize: '1.4rem' }} />
          </Toolbar>
        </Box>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header
