// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Typography from '@schoolify/core/components/base/inputs/Typography'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import Paper from '@schoolify/core/components/base/inputs/Paper'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// Custom Utilities
import { contactSectionData } from '@schoolify/features/landing/aboutUs/utilities/contactSectionData'

// Icon Components
import { PhoneIcon } from '@schoolify/core/components/icon/PhoneIcon'

const ContactSection = () => {
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
      <div id='contact'></div>
      <Typography
        variant='h3'
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: theme.palette.text.title,
          mb: 2,
          fontSize: { xs: '1.8rem', md: '2.4rem' }
        }}
      >
        تماس با ما
      </Typography>
      <Typography
        variant='body1'
        sx={{
          textAlign: 'center',
          color: theme.palette.info.dark,
          mb: 6,
          fontSize: { xs: '0.9rem', md: '1.1rem' }
        }}
      >
        در صورت بروز هرگونه مشکل یا سوال، تیم پشتیبانی ما آماده کمک به شماست
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent='center'
        sx={{
          maxWidth: 1200,
          mx: 'auto'
        }}
      >
        {contactSectionData.map((contact, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 3,
                textAlign: 'center',
                height: '100%'
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: theme.palette.primary.light,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2
                }}
              >
                <contact.icon
                  width={24}
                  height={24}
                  color={theme.palette.brand.main}
                />
              </Box>
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  color: theme.palette.text.cardTitle,
                  mb: 1,
                  fontSize: { xs: '1rem', md: '1.2rem' }
                }}
              >
                {contact.title}
              </Typography>
              {contact.items.map((item, idx) => (
                <Typography
                  key={idx}
                  variant='body2'
                  sx={{
                    color: theme.palette.info.dark,
                    fontSize: { xs: '0.85rem', md: '1rem' },
                    direction: contact.icon === PhoneIcon ? 'ltr' : 'rtl'
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ContactSection
