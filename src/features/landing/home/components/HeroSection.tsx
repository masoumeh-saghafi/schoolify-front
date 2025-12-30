// React Types
import { Link } from 'react-router-dom'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Typography from '@schoolify/core/components/base/inputs/Typography'
import Button from '@schoolify/core/components/base/inputs/Button'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// Core Utilities
import routes from '@schoolify/core/utilities/routes'

const HeroSection = () => {
  // Hooks
  const theme = useAppTheme()

  // Render
  return (
    <Box
      component="section"
      itemScope
      itemType="https://schema.org/WebPageElement"
      aria-label="بخش معرفی اسکولیفای"
      sx={{
        py: { xs: 15, md: 20 },
        px: { xs: 3, md: 8 },
        textAlign: 'center',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        component="h1"
        variant='h1'
        itemProp="headline"
        sx={{
          color: theme.palette.brand.main,
          fontWeight: 'bold',
          mb: 1,
          fontSize: { xs: '2.3rem', md: '4rem' }
        }}
      >
        مدیریت مالی مدرسه
      </Typography>
      <Typography
        component="span"
        variant='h1'
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          mb: 3,
          fontSize: { xs: '1.9rem', md: '3rem' }
        }}
      >
        ساده و مطمئن
      </Typography>
      <Typography
        component="p"
        variant='h6'
        itemProp="description"
        sx={{
          color: theme.palette.info.dark,
          fontWeight: 'normal',
          maxWidth: 800,
          mx: 'auto',
          mb: 6,
          lineHeight: 2,
          opacity: 0.9,
          fontSize: { xs: '0.9rem', md: '1.1rem' }
        }}
      >
        اسکولیفای، راهکاری نوین برای ساماندهی امور مالی مدارس: از ثبت شهریه تا
        گزارش‌گیری حرفه‌ای، همه چیز در یک محیط امن و کاربرپسند.
      </Typography>
      <Button
        component={Link}
        to={routes.login}
        variant='contained'
        size='large'
        aria-label="شروع استفاده از اسکولیفای"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.white,
          px: 4,
          py: 1.5,
          fontSize: '1rem',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: theme.palette.brand.main,
            color: theme.palette.text.white
          }
        }}
      >
        همین حالا شروع کنید
      </Button>
      <Typography
        component="p"
        variant='body2'
        sx={{ mt: 4, opacity: 0.8, fontSize: '0.85rem' }}
      >
        فرایند مدیریت مالی مدرسه را با دقت و کارآمدی بی‌نظیر تجربه کنید.
      </Typography>
    </Box>
  )
}

export default HeroSection
