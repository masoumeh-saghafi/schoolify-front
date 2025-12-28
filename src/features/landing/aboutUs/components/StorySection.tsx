// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Typography from '@schoolify/core/components/base/inputs/Typography'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

const StorySection = () => {
  // Hooks
  const theme = useAppTheme()

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: theme.palette.background.default
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems='stretch'
        sx={{
          maxWidth: 1400,
          mx: 'auto'
        }}
      >
        <Grid
          size={{ xs: 0, md: 6 }}
          sx={{
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.light,
              borderRadius: 4,
              p: 4,
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100%'
            }}
          >
            <Typography
              variant='h4'
              sx={{
                fontWeight: 'bold',
                color: theme.palette.brand.main,
                mb: 2,
                fontSize: { xs: '1.8rem', md: '2rem' }
              }}
            >
              با اسکولیفای
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: theme.palette.info.dark,
                lineHeight: 2,
                fontSize: { xs: '0.9rem', md: '1.1rem' }
              }}
            >
              مدیریت مالی دیگر دغدغه‌ای سخت و پیچیده نیست؛ بلکه تجربه‌ای ساده،
              مطمئن و دلپذیر است.
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography
            variant='h4'
            sx={{
              fontWeight: 'bold',
              color: theme.palette.text.title,
              mb: 3,
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}
          >
            داستان ما
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: theme.palette.info.dark,
              lineHeight: 2,
              mb: 3,
              fontSize: { xs: '0.9rem', md: '1.1rem' }
            }}
          >
            اسکولیفای از یک ایده ساده شروع شد: اینکه مدیریت مالی مدارس نباید
            پیچیده، زمان‌بر یا خسته‌کننده باشد. تجربه مستقیم کار با مدارس و
            مشاهده ساعت‌ها وقت تلف شده برای ثبت دستی پرداخت‌ها و گزارش‌گیری‌های
            پیچیده، الهام‌بخش تیم ما شد تا سامانه‌ای بسازیم که کارآمد، دقیق و
            روان باشد.
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: theme.palette.info.dark,
              lineHeight: 2,
              fontSize: { xs: '0.9rem', md: '1.1rem' }
            }}
          >
            اسکولیفای با تکیه بر دانش فنی و طراحی رابط کاربری بهینه، فرآیندهای
            مالی را ساده می‌کند و امکان می‌دهد مدیران و کادر آموزشی روی آموزش و
            پرورش دانش‌آموزان تمرکز کنند.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default StorySection
