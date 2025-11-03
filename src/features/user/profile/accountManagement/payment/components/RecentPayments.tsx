import { useNavigate } from "react-router-dom"
import useListPayment from "../hooks/useListPayment"
import Typography from "@schoolify/core/components/base/inputs/Typography"
import ContentBox from "@schoolify/core/components/common/ContentBox"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import TableBody from "@mui/material/TableBody"
import FormattedDate from "@schoolify/core/components/common/FormattedDate"
import Button from "@schoolify/core/components/base/inputs/Button"
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme"
import Paper from "@schoolify/core/components/base/inputs/Paper"


const translateStatus = (status: string) => {
  switch (status) {
    case 'processing':
      return 'در حال پردازش'
    case 'success':
      return 'موفقیت‌آمیز'
    case 'failure':
      return 'ناموفق'
    default:
      return status
  }
}

const RecentPayments = () => {
   const navigate = useNavigate()
   const { data, isLoading, error } = useListPayment()
   const theme=useAppTheme()
   
  if (isLoading) return <Typography>در حال بارگذاری...</Typography>
  if (error) return <Typography color='error'>خطا در دریافت داده‌ها</Typography>

  const redirectToPaymentHandler = (paymentId: string) => {
    navigate(`/payment?paymentId=${paymentId}`)
  }

  return (
    <ContentBox label=' تراکنش های اخیر'>
      <TableContainer
        component={Paper}
        sx={{
          borderColor: theme.palette.grey[100],
          borderRadius: 2,
          boxShadow: 1
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>عنوان اشتراک</TableCell>
              <TableCell>تاریخ خرید</TableCell>
              <TableCell>مبلغ</TableCell>
              <TableCell>آخرین بروزرسانی</TableCell>
              <TableCell>وضعیت</TableCell>
              <TableCell>ورود به درگاه</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((payment, index) => (
              <TableRow key={index}>
                <TableCell>{payment.data?.title}</TableCell>
                <TableCell>
                  <FormattedDate date={+new Date(payment.data?.createDate)} />
                </TableCell>
                <TableCell>{payment.data?.amount.toLocaleString()}</TableCell>
                <TableCell>
                  {payment.data?.updateDate ? (
                    <FormattedDate date={+new Date(payment.data.updateDate)} />
                  ) : (
                    '---'
                  )}
                </TableCell>
                <TableCell>{translateStatus(payment.data.status)}</TableCell>
                <TableCell>
                  <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    sx={{ minWidth: 100 }}
                    onClick={() => redirectToPaymentHandler(payment.id)}
                    disabled={payment.data.status !== 'processing'}
                  >
                    ورود به درگاه
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContentBox>
  )
}

export default RecentPayments
