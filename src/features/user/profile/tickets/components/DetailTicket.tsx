// React Type
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

//Type Definitions
import type z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { isDirty } from 'zod/v3'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Typography from '@schoolify/core/components/base/inputs/Typography'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import Tooltip from '@schoolify/core/components/base/inputs/Tooltip'
import Button from '@schoolify/core/components/base/inputs/Button'
import Card from '@schoolify/core/components/base/inputs/Card'
import CardContent from '@schoolify/core/components/base/inputs/CardContent'

// Core Components
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import DetailField from '@schoolify/core/components/common/DetailField'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import useCloseTicket from '@schoolify/features/user/profile/tickets/hooks/useCloseTicket'
import useAddMessageToTicket from '@schoolify/features/user/profile/tickets/hooks/useAddMessageToTicket'
import useGetUserTicket from '@schoolify/features/user/profile/tickets/hooks/useGetUserTicket'

// Custom Utilities
import { ticketInfoData } from '@schoolify/features/user/profile/tickets/utilities/ticketInfoData'

// Validation Schema
import { UnitOptions } from '@schoolify/features/user/profile/tickets/validation/baseTypes'
import { ticketDetailValidationSchema } from '@schoolify/features/user/profile/tickets/validation/ticketDetailValidation'
import AsyncStateHandler from '@schoolify/core/components/common/AsyncStateHandler'
import { size } from 'zod'

// Form schema
type SchemaProps = z.infer<typeof ticketDetailValidationSchema>

// Custom Types
interface DetailTicketProps {}

const DetailTicket = (props: DetailTicketProps) => {
  // Hooks
  const location = useLocation()
  const queryParams = location.hash.split('?')[1]
  const params = new URLSearchParams(queryParams)
  const ticketId = params.get('id') ?? ''

  const { data: ticketData, isLoading, error } = useGetUserTicket(ticketId)
  const theme = useAppTheme()
  const { mutateAsync: addTicketMessage } = useAddMessageToTicket()
  const { mutateAsync: closeTicket } = useCloseTicket()
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid }
  } = useForm<SchemaProps>({
    resolver: zodResolver(ticketDetailValidationSchema),
    mode: 'onChange',
    defaultValues: {
      content: ''
    }
  })

  // Handlers
  const handleAddTicketMessage = async (data: SchemaProps) => {
    const result = await addTicketMessage({ data: data, ticketId: ticketId })
    if (result.isSuccess) handleReset()
  }

  const handleCloseTicket = async () => {
    await closeTicket({ ticketId })
  }
  const handleReset = () => {
    reset({ content: '' })
  }

  // Helpers
  const ticketFields = ticketInfoData(ticketData?.data, UnitOptions)
  if (!ticketId) return <>تیکت نامعتبر</>

  // Render
  return (
    <Box>
      <ContentBox label='جزئیات تیکت'>
        <Grid container spacing={2} sx={{ m: 2 }}>
          {ticketFields.map((field, index) => (
            <DetailField key={index} label={field.label} value={field.value} />
          ))}
          <Grid size={{ xs: 12, sm: 6 }}>
            <Tooltip
              title={
                ticketData?.data?.status === 'close'
                  ? 'برای باز شدن تیکت، یک پیام جدید ارسال کنید.'
                  : ''
              }
              arrow
            >
              <span style={{ width: '100%' }}>
                <Button
                  variant='contained'
                  color='error'
                  fullWidth
                  size='small'
                  disabled={ticketData?.data?.status === 'close'}
                  onClick={() => handleCloseTicket()}
                  sx={{
                    backgroundColor:
                      ticketData?.data?.status === 'close'
                        ? theme.palette.grey[400]
                        : theme.palette.error.main,
                    color: theme.palette.text.white
                  }}
                >
                  {ticketData?.data?.status === 'close'
                    ? ' تیکت بسته شده است'
                    : 'بستن تیکت'}
                </Button>
              </span>
            </Tooltip>
          </Grid>
        </Grid>
      </ContentBox>
      <ContentBox
        label='ارسال پاسخ'
        component='form'
        onSubmit={handleSubmit(handleAddTicketMessage)}
      >
        <ControlledGridTextField
          label='متن پیام'
          placeholder='در صورت حل‌نشدن مشکل، لطفاً شرح دقیقی از موضوع را در این قسمت وارد نمایید.'
          name='content'
          rows={5}
          helperText={errors.content?.message}
          multiline={true}
          control={control}
          sm={12}
          xs={12}
        />

        <Grid
          size={12}
          display='flex'
          justifyContent='flex-end'
          gap={2}
          sx={{ mt: 2 }}
        >
          <Button variant='outlined' color='secondary' onClick={handleReset}>
            لغو
          </Button>
          <Button
            type='submit'
            variant='contained'
            disabled={!isValid || !isDirty}
          >
            ارسال
          </Button>
        </Grid>
      </ContentBox>

      <ContentBox label='لیست پیام‌ها'>
        <AsyncStateHandler isLoading={isLoading} error={error}>
          {ticketData?.data?.messages?.map((message, index) => {
            const role = message.user.role
            let backgroundColor = theme.palette.background.default

            if (role === 'support') {
              backgroundColor = theme.palette.background.support
            } else if (role === 'user') {
              backgroundColor = theme.palette.background.user
            }

            return (
              <Card key={index} sx={{ mb: 2, backgroundColor }}>
                <CardContent sx={{ position: 'relative' }}>
                  <Typography
                    variant='subtitle2'
                    sx={{ mb: 1, fontWeight: 'bold' }}
                  >
                    {message.user?.fullName}
                  </Typography>

                  <Typography
                    variant='body2'
                    sx={{
                      mb: 3,
                      color: theme.palette.text.black,
                      textAlign: 'justify'
                    }}
                  >
                    {message.content}
                  </Typography>

                  <Typography
                    variant='caption'
                    color='text.secondary'
                    sx={{ position: 'absolute', bottom: 8, right: 16 }}
                  >
                    <FormattedDate date={message.createDate} showTime />
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
        </AsyncStateHandler>
      </ContentBox>
    </Box>
  )
}
export default DetailTicket
