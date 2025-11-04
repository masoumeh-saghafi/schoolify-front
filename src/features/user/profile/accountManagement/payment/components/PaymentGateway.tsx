import Button from "@schoolify/core/components/base/inputs/Button"
import Typography from "@schoolify/core/components/base/inputs/Typography"
import Box from "@schoolify/core/components/base/inputs/Box"
import IconButton from "@schoolify/core/components/base/inputs/IconButton"

import { postPaymentStatus } from "@schoolify/features/user/profile/accountManagement/payment/utilities/api/api"

import { CloseIcon } from "@schoolify/core/components/icon/CloseIcon"

import useAppTheme from "@schoolify/core/hooks/common/useAppTheme"

import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

const PaymentGateway = () => {
  
  const navigate = useNavigate()
  const theme = useAppTheme()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const paymentId = searchParams.get('paymentId')
  const backPath = location.state?.from

if (!paymentId) {
  alert('شناسه پرداخت نامعتبر است.')
  navigate(backPath || -1)
  return null
}


  const handleResult = async (status: 'success' | 'failure') => {
    try {
      await postPaymentStatus({ status }, paymentId)

      alert(
        status === 'success'
          ? 'پرداخت موفقیت‌آمیز بود! اشتراک فعال شد.'
          : 'پرداخت ناموفق بود! لطفاً مجدداً تلاش کنید.'
      )
    } catch (error) {
      console.error('خطا در تغییر وضعیت پرداخت:', error)
      alert('خطایی در ارتباط با سرور رخ داد. لطفاً دوباره تلاش کنید.')
    } finally {
      if (backPath) {
        navigate(backPath)
      } else {
        navigate(-1)
      }
    }
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2
      }}
    >
      <Box
        sx={{
          maxWidth: 350,
          width: '100%',
          textAlign: 'center',
          p: 3,
          border: 1,
          borderRadius: 2,
          borderColor: theme.palette.grey[300],
          bgcolor: 'background.paper',
          position: 'relative'
        }}
      >
        <IconButton
          onClick={() => (backPath ? navigate(backPath) : navigate(-1))}
          sx={{ position: 'absolute', top: 8, left: 8, color: 'grey.600' }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant='h6' sx={{ mb: 2 }}>
          وضعیت پرداخت
        </Typography>
        <Typography variant='body1' sx={{ mb: 3 }}>
          لطفاً نتیجه پرداخت خود را تأیید کنید.
        </Typography>

        <Button
          variant='contained'
          color='success'
          sx={{ m: 1 }}
          onClick={() => handleResult('success')}
        >
          موفقیت‌آمیز
        </Button>
        <Button
          variant='contained'
          color='error'
          sx={{ m: 1 }}
          onClick={() => handleResult('failure')}
        >
          ناموفق
        </Button>
      </Box>
    </Box>
  )
}

export default PaymentGateway
