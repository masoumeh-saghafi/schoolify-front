// React Type
import { useState } from 'react'
import AsyncStateHandler from '@schoolify/core/components/common/AsyncStateHandler'

// MUI Components
import Typography from '@schoolify/core/components/base/inputs/Typography'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import Paper from '@schoolify/core/components/base/inputs/Paper'
import Button from '@schoolify/core/components/base/inputs/Button'
import TextField from '@schoolify/core/components/base/inputs/TextField'

// Core Components
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

// Feature Components
import useBuySubscription from '@schoolify/features/user/profile/accountManagement/subscription/hooks/useBuySubscription'
import type ListSubscriptionsEntity from '@schoolify/features/user/profile/accountManagement/subscription/types/api/ListSubscriptionsEntity'
import useListSubscriptions from '@schoolify/features/user/profile/accountManagement/subscription/hooks/useListSubscriptions'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'


// Custom Types
// interface BuySubscriptionProps {}

const BuySubscription = () => {
  // Hooks
  const theme = useAppTheme()
  const { data, isLoading, error } = useListSubscriptions()
  const { mutateAsync: buySubscription } = useBuySubscription()

  // States
  const [schoolTitles, setSchoolTitles] = useState<Record<number, string>>({})

  // Handlers
  const handleBuySubscription = async (
    subscription: BaseIdDataEntity<ListSubscriptionsEntity>,
    schoolTitle: string
  ) => {
    const payload = {
      schoolTitle,
      subscriptionId: subscription.id
    }

    await buySubscription(payload)
  }

  // Render
  return (
    <ContentBox label='خرید اشتراک '>
      <AsyncStateHandler isLoading={isLoading} error={error}>

      <Grid container spacing={2}>
        {data?.map((subscription: any, index: any) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                borderRadius: 2,
                borderColor: theme.palette.info.dark,
                backgroundColor: theme.palette.primary.light,
                textAlign: 'center'
              }}
            >
              <Typography
                variant='subtitle1'
                fontWeight='bold'
                sx={{ color: theme.palette.text.cardTitle }}
                mb={1}
              >
                {subscription.data?.title}
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: theme.palette.text.black }}
              >
                مدت زمان : {subscription.data?.daysCount} روز
              </Typography>
              <Typography
                variant='body2'
                my={1}
                sx={{
                  color: theme.palette.text.black
                }}
              >
                مبلغ : {subscription.data?.amount.toLocaleString()} تومان
              </Typography>
              <TextField
                label='نام مدرسه'
                fullWidth
                slotProps={{
                  inputLabel: {
                    shrink: true
                  }
                }}
                placeholder='لطفا نام مدرسه را وارد نمایید'
                size='small'
                sx={{
                  my: 1,
                  textAlign: 'right',
                  backgroundColor: theme.palette.background.paper,
                  '& .MuiOutlinedInput-root': {
                    fontSize: '0.70rem',
                    color: theme.palette.text.placeholder,
                    '& input': {
                      color: theme.palette.text.black
                    },
                    ' fieldset': {
                      borderColor: theme.palette.grey[300]
                    },
                    '&:hover fieldset': {
                      borderColor: theme.palette.grey[300]
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: theme.palette.grey[600]
                    }
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: theme.palette.text.label
                  }
                }}
                value={schoolTitles[index] || ''}
                onChange={(event: any) =>
                  setSchoolTitles({
                    ...schoolTitles,
                    [index]: event.target.value
                  })
                }
              />
              <Button
                fullWidth
                variant='contained'
                color='primary'
                disabled={!schoolTitles[index]}
                onClick={() =>
                  handleBuySubscription(subscription, schoolTitles[index])
                }
              >
                خرید اشتراک
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
        </AsyncStateHandler>
    </ContentBox>
  )
}

export default BuySubscription
