// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Typography from '@schoolify/core/components/base/inputs/Typography'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import Paper from '@schoolify/core/components/base/inputs/Paper'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import { featuresSectionData } from '@schoolify/features/landing/home/utilities/featuresSectionData'

const FeaturesSection = () => {
  // Hooks
  const theme = useAppTheme()

  // Render
  return (
    <Box
      component="section"
      aria-labelledby="features-heading"
      sx={{
        py: { xs: 15, md: 20 },
        px: { xs: 3, md: 8 },
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Typography
        component="h2"
        id="features-heading"
        variant='h3'
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: theme.palette.text.title,
          mb: 2,
          fontSize: { xs: '1.8rem', md: '2.4rem' }
        }}
      >
        امکانات اسکولیفای
      </Typography>
      <Typography
        component="p"
        variant='body1'
        sx={{
          textAlign: 'center',
          color: theme.palette.info.dark,
          mb: 6
        }}
      >
        ابزارهای قدرتمند برای مدیریت مالی مدرسه شما
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: 1200,
          mx: 'auto'
        }}
      >
        {featuresSectionData.map((feature, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Paper
              component="article"
              elevation={0}
              sx={{
                p: 3,
                maxWidth: 520,
                mx: 'auto',
                height: '100%',
                backgroundColor: '#e0ffe0',
                borderRadius: 3,
                textAlign: 'center',
                display: 'flex',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 0px 2px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  '& .card-info-icon': {
                    bgcolor: 'primary.main',
                    transform: 'scale(1.05)',
                    '& svg': { color: '#fff' }
                  }
                }
              }}
            >
              <Box
                className='card-info-icon'
                aria-hidden="true"
                sx={{
                  px: 1.7,
                  py: 3.7,
                  borderRadius: 3,
                  bgcolor: 'rgba(54, 176, 82,0.1)',
                  transition: 'all .3s',
                  height: 50,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '& svg': {
                    width: 36,
                    height: 36,
                    color: 'primary.main',
                    transition: '.3s'
                  }
                }}
              >
                <feature.icon color={theme.palette.brand.light} />
              </Box>
              <Box
                sx={{
                  mx: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1
                }}
              >
                <Typography
                  component="h3"
                  variant='h6'
                  sx={{
                    textAlign: 'start',
                    fontWeight: 'bold',
                    color: theme.palette.brand.main,
                    mb: 1
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  component="p"
                  variant='body2'
                  sx={{
                    textAlign: 'start',
                    color: theme.palette.info.dark,
                    lineHeight: 1.8,
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FeaturesSection
