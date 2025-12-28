// React Type
import { useEffect } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

//Type Definitions
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// MUI Components
import Typography from '@schoolify/core/components/base/inputs/Typography'
import Box from '@schoolify/core/components/base/inputs/Box'
import Button from '@schoolify/core/components/base/inputs/Button'
import TextField from '@schoolify/core/components/base/inputs/TextField'
import FormHelperText from '@schoolify/core/components/base/inputs/FormHelperText'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// Validation Schema
import { codeSchema } from '@schoolify/features/shared/authentication/validations/phoneValidation'




// Icon Components
import { ArrowLeftIcon } from '@schoolify/core/components/icon/ArrowLeftIcon'

// Custom Types
export type VerifyCodeFormProps = z.infer<typeof codeSchema>

interface VerifyCodeProps {
  onSubmit: SubmitHandler<VerifyCodeFormProps>
  onBack: () => void
  countdown: number
}

const VerifyCode = (props: VerifyCodeProps) => {
  const { onSubmit, onBack, countdown } = props

  // Hooks
  const theme = useAppTheme()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<VerifyCodeFormProps>({
    resolver: zodResolver(codeSchema),
    mode: 'onChange',
    defaultValues: {
      code: ''
    }
  })

  // Auto-redirect to send code when timer expires
  useEffect(() => {
    if (countdown <= 0) {
      onBack()
    }
  }, [countdown, onBack])

  // Calculate time
  const minutes = Math.floor(countdown / 60)
  const seconds = countdown % 60

  // Render
  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: '100%' }}
    >
      {/* Code Field Label */}
      <Box sx={{ mb: 3 }}>
        <Typography
          component='label'
          sx={{
            display: 'block',
            textAlign: 'left',
            mb: 1,
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.palette.text.label,

            direction: 'ltr'
          }}
        >
          کد تایید
        </Typography>

        <TextField
          fullWidth
          type='text'
          placeholder='******'
          {...register('code')}
          error={!!errors.code}
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
        />
        {errors.code && (
          <FormHelperText error sx={{ textAlign: 'left', mt: 0.5 }}>
            {errors.code.message}
          </FormHelperText>
        )}
      </Box>

      {/* Timer and Resend */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3
        }}
      >
        <Typography
          variant='body2'
          onClick={countdown <= 0 ? onBack : undefined}
          sx={{
            color:
              countdown <= 0
                ? theme.palette.primary.main
                : theme.palette.text.primary,
            cursor: countdown <= 0 ? 'pointer' : 'default',
            fontSize: '0.85rem',
            '&:hover':
              countdown <= 0 ? { textDecoration: 'underline' } : undefined
          }}
        >
          ارسال مجدد کد
        </Typography>
        <Typography
          variant='body2'
          sx={{
            color: theme.palette.text.primary,
            fontSize: '0.85rem',
            direction: 'ltr'
          }}
        >
          {`${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`}
        </Typography>
      </Box>

      {/* Submit Button */}
      <Button
        type='submit'
        variant='contained'
        fullWidth
        disabled={countdown <= 0}
        sx={{
          py: 1.5,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.white,
          fontWeight: 'bold',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: theme.palette.brand.main
          },
          '&:disabled': {
            backgroundColor: theme.palette.grey[300]
          }
        }}
      >
        ورود
        <ArrowLeftIcon width={18} height={18} />
      </Button>

      {/* Back Link */}
      <Box
        sx={{
          mt: 3,
          textAlign: 'center'
        }}
      >
        <Typography variant='body2' sx={{ color: theme.palette.text.primary }}>
          شماره اشتباه وارد شده؟{' '}
          <Box
            component='span'
            onClick={onBack}
            sx={{
              color: theme.palette.primary.main,
              cursor: 'pointer',
              fontWeight: 500,
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            تغییر شماره
          </Box>
        </Typography>
      </Box>
    </Box>
  )
}

export default VerifyCode
