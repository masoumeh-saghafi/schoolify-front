// MUI Components
import Button from '@schoolify/core/components/base/inputs/Button'

// Core Components
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import AsyncStateHandler from '@schoolify/core/components/common/AsyncStateHandler'
import DataTable from '@schoolify/core/components/common/DataTable'

// Custom Hooks
import useListUserSubscriptions from '@schoolify/features/user/profile/accountManagement/subscription/hooks/useListUserSubscriptions'
import useRenewalSubscription from '@schoolify/features/user/profile/accountManagement/subscription/hooks/useRenewalSubscription'
import { useAppTheme } from '@schoolify/core/hooks/common/useAppTheme'

// Custom Utilities
import { SubscriptionsPurchasedColumns } from '@schoolify/features/user/profile/accountManagement/subscription/utilities/SubscriptionsPurchasedData'

//Type Definitions
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import ContentBox from '@schoolify/core/components/common/ContentBox'

dayjs.extend(jalaliday)

const calculateRemainingDays = (endDate: string | undefined) => {
  if (!endDate) return 0
  const now = dayjs()
  const end = dayjs(endDate)
  const diff = end.diff(now, 'day')
  return diff > 0 ? diff : 0
}

const SubscriptionsPurchased = () => {
  // Hooks
  const { data, isLoading, error } = useListUserSubscriptions()
  const { mutateAsync: renewalSubscription } = useRenewalSubscription()
  const theme = useAppTheme()
  const columns = SubscriptionsPurchasedColumns()

  // Helpers
  const active = data?.filter((sub: any) => sub.data.status === 'active') || []

  // Handlers
  const handleRenewal = async (
    subscriptionData: any,
    subscriptionId: string
  ) => {
    await renewalSubscription({
      data: subscriptionData,
      subscriptionId: subscriptionId
    })
  }

  // Render
  return (
    <ContentBox label=' اشتراک‌های خریداری‌شده'>
      <AsyncStateHandler isLoading={isLoading} error={error}>
        <DataTable
          columns={columns}
          rows={active.map(sub => ({
            id: sub.id,
            school: sub.data?.school.data?.title,
            createDate: sub.data?.createDate,
            expireDate: sub.data?.expireDate
          }))}
          renderCell={(row, col) => {
            const daysRemaining = calculateRemainingDays(row.expireDate)
            switch (col.id) {
              case 'createDate':
              case 'expireDate':
                return row[col.id] ? (
                  <FormattedDate date={+new Date(row[col.id])} />
                ) : (
                  '---'
                )
              case 'remaining':
                return calculateRemainingDays(row.expireDate)
              case 'actions':
                return (
                  <Button
                    variant='contained'
                    size='small'
                    disabled={daysRemaining >= 10}
                    onClick={() => handleRenewal({}, row.id)}
                  >
                    تمدید
                  </Button>
                )
              default:
                return row[col.id]
            }
          }}
        />
      </AsyncStateHandler>
    </ContentBox>
  )
}
export default SubscriptionsPurchased
