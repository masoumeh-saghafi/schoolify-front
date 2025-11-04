import { useNavigate } from 'react-router-dom'
import useListPayment from '../hooks/useListPayment'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import Button from '@schoolify/core/components/base/inputs/Button'
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import AsyncStateHandler from '@schoolify/core/components/common/AsyncStateHandler'
import DataTable from '@schoolify/core/components/common/DataTable'
import { TransactionsColumns } from '../utilities/RecentPaymentsData'

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
  const theme = useAppTheme()
  const columns = TransactionsColumns()

  const redirectToPaymentHandler = (paymentId: string) => {
    navigate(`/payment?paymentId=${paymentId}`)
  }

  return (
    <ContentBox label='تراکنش‌های اخیر'>
      <AsyncStateHandler isLoading={isLoading} error={error}>
        <DataTable
          columns={columns}
          rows={
            data?.map((payment: any) => ({
              id: payment.id,
              title: payment.data?.title,
              createDate: payment.data?.createDate,
              amount: payment.data?.amount,
              updateDate: payment.data?.updateDate,
              status: payment.data?.status
            })) || []
          }
          renderCell={(row, col) => {
            switch (col.id) {
              case 'createDate':
              case 'updateDate':
                return row[col.id] ? (
                  <FormattedDate date={+new Date(row[col.id])} />
                ) : (
                  '---'
                )
              case 'amount':
                return row.amount?.toLocaleString() || '---'
              case 'status':
                return translateStatus(row.status)
              case 'actions':
                return (
                  <Button
                    variant='contained'
                    size='small'
                    color='primary'
                    sx={{
                      minWidth: 100,
                      backgroundColor:
                        row.status === 'processing'
                          ? theme.palette.primary.main
                          : theme.palette.primary.dark
                    }}
                    onClick={() => redirectToPaymentHandler(row.id)}
                    disabled={row.status !== 'processing'}
                  >
                    ورود به درگاه
                  </Button>
                )
              default:
                return row[col.id] || '---'
            }
          }}
        />
      </AsyncStateHandler>
    </ContentBox>
  )
}

export default RecentPayments
