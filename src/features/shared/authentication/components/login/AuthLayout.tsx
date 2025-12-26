// ==============================
// AuthLayout Component
// Layout container for authentication-related pages.
// Handles responsive background images, logo display, and overall page structure.
// ==============================

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Typography from '@schoolify/core/components/base/inputs/Typography'

// Core Components
import Logo from '@schoolify/core/shared/Logo'

// Custom Types
interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {
  // Props
  const { children } = props

  // Hooks
  const theme = useAppTheme()

  // Render
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2
        // direction: 'rtl'
      }}
    >
      {/* Form Card Container */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 480,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
          // direction: 'ltr'
        }}
      >
        {/* Logo */}

        {/* Form Card */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            borderRadius: 3,
            p: { xs: 3, sm: 4 },
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            // direction: 'rtl'
          }}
        >
          {/* Children (Form Fields / Buttons) */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              mb: 3
            }}
          >
            <Logo
              variant='h5'
              sx={{
                color: theme.palette.text.title
              }}
            />
          </Box>

          {/* Welcome Text */}
            <Typography
          variant="body2"
          sx={{
            fontWeight: "bold",
            color: theme.palette.primary.dark,
            mb: 2,
          }}
        >
         ورود یا ثبت نام در اسکولیفای 
        </Typography>

        

          {/* <Typography
            variant='body2'
            sx={{
              color: theme.palette.primary.main,
              mb: 4
            }}
          >
            برای ادامه وارد حساب کاربری خود شوید
          </Typography> */}

          {children}
        </Box>

        {/* Terms Text
        <Typography
          variant='caption'
          sx={{
            color: theme.palette.text.primary,
            mt: 3,
            textAlign: 'center'
          }}
        >
          با ورود به سیستم، شما{' '}
          <Box
            component='span'
            sx={{
              color: theme.palette.primary.main,
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            قوانین و مقررات
          </Box>{' '}
          را می‌پذیرید
        </Typography> */}
      </Box>
    </Box>
  )
}

export default AuthLayout
