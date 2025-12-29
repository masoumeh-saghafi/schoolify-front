// React Types
import { useForm, type SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'

//Type Definitions
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Button from '@schoolify/core/components/base/inputs/Button'
import Typography from '@schoolify/core/components/base/inputs/Typography'
import TextField from '@schoolify/core/components/base/inputs/TextField'
import InputAdornment from '@schoolify/core/components/base/inputs/InputAdornment'
import FormHelperText from '@schoolify/core/components/base/inputs/FormHelperText'

// Core Components
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// Feature Components
import { phoneSchema } from '@schoolify/features/shared/authentication/validations/phoneValidation'

// Custom Utilities
import routes from '@schoolify/core/utilities/routes'

// Icon Components
import { ArrowLeftIcon } from '@schoolify/core/components/icon/ArrowLeftIcon'
import { PhoneIcon } from '@schoolify/core/components/icon/PhoneIcon'




// Custom Types
export type SendCodeFormProps = z.infer<typeof phoneSchema>

interface SendCodeProps {
  onSubmit: SubmitHandler<SendCodeFormProps>
}

const SendCode = (props: SendCodeProps) => {
  // Props
  const { onSubmit } = props

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SendCodeFormProps>({
    resolver: zodResolver(phoneSchema),
    mode: 'onChange'
  })

  

  const theme = useAppTheme()

  // Render
  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: '100%' }}
    >
      {/* Phone Number Field */}
      <Box sx={{ mb: 3 }}>
        <Typography
          component='label'
          variant='overline'
          sx={{
            color: theme.palette.info.dark,
            mb: 3
          }}
        >
          لطفا شماره موبایل خود را وارد کنید
        </Typography>

        <TextField
          fullWidth
          type='text'
          placeholder='09*********'
          {...register('phoneNumber')}
          error={!!errors.phoneNumber}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
              '& fieldset': {
                borderColor: theme.palette.grey[300]
              },
              '&:hover fieldset': {
                borderColor: theme.palette.primary.main
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main
              }
            },
            '& .MuiInputBase-input': {
              textAlign: 'left',
              direction: 'rtl'
            }
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position='end'>
                  <PhoneIcon width={22} height={22} color={theme.palette.grey[200]} />
                </InputAdornment>
              )
            }
          }}
        />
        {errors.phoneNumber && (
          <FormHelperText error sx={{ textAlign: 'left', mt: 0.5 }}>
            {errors.phoneNumber.message}
          </FormHelperText>
        )}
      </Box>

      {/* Submit Button */}
      <Button
        type='submit'
        variant='contained'
        fullWidth
        sx={{
          py: 1.3,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.white,
          fontWeight: 'bold',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          fontSize: '0.8rem',
          '&:hover': {
            backgroundColor: theme.palette.brand.main
          }
        }}
      >
        ارسال کد تایید
        <ArrowLeftIcon width={20} height={20} />
      </Button>

      {/* Terms Text */}
      <Box
        sx={{
          mt: 2,
          textAlign: 'center'
        }}
      >
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
            component={Link}
            to={routes.terms}
            sx={{
              color: theme.palette.primary.main,
              cursor: 'pointer',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' }
            }}
          >
            قوانین و مقررات
          </Box>{' '}
          را می‌پذیرید
        </Typography>
      </Box>
    </Box>
  )
}

export default SendCode
