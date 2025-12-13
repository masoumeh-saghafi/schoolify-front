import ContentBox from '@schoolify/core/components/common/ContentBox'
import { useLocation, useParams } from 'react-router-dom'
import { ticketDetailValidationSchema } from '../validation/ticketDetailValidation'
import type z from 'zod'
import useGetUserTicket from '../hooks/usegetUserTicket'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useAddMessageToTicket from '../hooks/useAddMessageToTicket'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import { ticketInfoData } from '../utilities/ticketInfoData'
import { UnitOptions } from '../validation/baseTypes'
import DetailField from '@schoolify/core/components/common/DetailField'
import Tooltip from '@schoolify/core/components/base/inputs/Tooltip'
import Button from '@schoolify/core/components/base/inputs/Button'
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import useCloseTicket from '../hooks/useCloseTicket'
import Box from '@schoolify/core/components/base/inputs/Box'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import Typography from '@schoolify/core/components/base/inputs/Typography'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
type SchemaProps = z.infer<typeof ticketDetailValidationSchema>

interface DetailTicketProps {}

const DetailTicket = (props: DetailTicketProps) => {
  const location = useLocation()
  const queryParams = location.hash.split('?')[1]
  const params = new URLSearchParams(queryParams)
  const routeTicketId = params.get('id')
  const { ticketId = '' } = useParams()
  const { data } = useGetUserTicket(ticketId)
  const theme = useAppTheme()
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid }
  } = useForm<SchemaProps>({
    resolver: zodResolver(ticketDetailValidationSchema),
    mode: 'onChange',
    defaultValues: {
      content: '',
      status: data?.data?.status || 'open'
    }
  })

  const handleUserTicket = async (data: SchemaProps) => {
    const result = await useAddMessageToTicket(
      { content: data.content },
      ticketId
    )
    if (result.isSuccess) reset(data)
  }

  const handleCloseTicket = async (data: SchemaProps) => {
    const result = await useCloseTicket(data, ticketId)
    if (result.isSuccess) reset(data)
  }
const handleReset = () => {
  reset({ content: '' })
}

  const ticketFields = ticketInfoData(data?.data, UnitOptions)

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
                data?.data?.status === 'close'
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
                  disabled={data?.data?.status === 'close'}
                  // onClick={() => {
                  //   closeTicket(ticketId)
                  //     .then(() => refetch())
                  //     .catch(err =>
                  //       console.error('خطا در بستن تیکت:', err.message)
                  //     )
                  // }}
                  onClick={() => handleCloseTicket(ticketId)}
                  sx={{
                    backgroundColor:
                      data?.data?.status === 'close'
                        ? theme.palette.grey[400]
                        : theme.palette.error.main,
                    color: theme.palette.text.white
                  }}
                >
                  {data?.data?.status === 'close'
                    ? ' تیکت بسته شده است'
                    : 'بستن تیکت'}
                </Button>
              </span>
            </Tooltip>
          </Grid>
        </Grid>
      </ContentBox>
      <ContentBox label='ارسال پاسخ' onSubmit={handleSubmit(handleUserTicket)}>
<ControlledGridTextField
  key='content'
  label='متن پیام'
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
          <Button type='submit' variant='contained' disabled={!isValid}>
            ارسال
          </Button>
        </Grid>

      </ContentBox>

      <ContentBox label='لیست پیام‌ها'>
  {data?.data?.messages.map((message, index) => {
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
          <Typography variant='subtitle2' sx={{ mb: 1, fontWeight: 'bold' }}>
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
</ContentBox>

    </Box>
  )
}
export default DetailTicket
