// React Type
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

//Type Definitions
import { zodResolver } from '@hookform/resolvers/zod'
import type z from 'zod'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'

// Custom Utilities
// import { UpdateAdminTicketDetailData } from '@schoolify/features/user/school/management/Ticket/utilities/UpdateAdminTicketDetailData'

// Validation Schema

// import { identityTypeOptions } from '@schoolify/features/user/school/management/Ticket/validation/baseTypes'

// Custom Hooks
// import useUpdateAdminTicketDetail from '@schoolify/features/user/school/management/Ticket/hooks/useUpdateAdminTicketDetail'
// import useUpdateAdminTicketDetail from '../hooks/useUpdateAdminTicketDetail'
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import { updateAdminTicketValidationSchema } from '../validation/updateAdminTicketValidation'
import useGetAdminTicket from '../hooks/useGetAdminTicket'
import useUpdateAdminTicket from '../hooks/useUpdateAdminTicket'
import { updateAdminTicketData } from '../utilities/updateAdminTicketData'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'

// Form schema
type SchemaProps = z.infer<typeof updateAdminTicketValidationSchema>

// Custom Types
interface UpdateAdminTicketDetailProps {}

const UpdateAdminTicketDetail = (props: UpdateAdminTicketDetailProps) => {
  // Props
  // const {} = props;

  // Hooks

  const theme = useAppTheme()
  const { ticketId = '' } = useParams()

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty }
  } = useForm<SchemaProps>({
    resolver: zodResolver(updateAdminTicketValidationSchema),
    mode: 'onChange'
  })

  const { data: data } = useGetAdminTicket(ticketId)
  const { mutateAsync: updateAdminTicket } = useUpdateAdminTicket()

  // Handlers
  const handleUpdateTicket = async (data: SchemaProps) => {
    const result = await updateAdminTicket({
      data: data,
      ticketId: ticketId
    })
    if (result.isSuccess) reset(data)
  }

  // const navigate = useNavigate()

  // const handleReturnToProfile = () => {
  //   navigate(routes.profile.baseUrl)
  // }

  // Render
  return (
    <Box>
      <ContentBox onSubmit={handleSubmit(handleUpdateTicket)} component='form'>
        <Grid container sx={{ margin: 2 }} spacing={2}>
          {updateAdminTicketData.map(field => (
            <ControlledAutocomplete
              key={field.name}
              control={control as any}
              name={field.name}
              label={field.label}
              placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
              options={
                (field as any).options?.map((option: any) => ({
                  key: option.key,
                  value: option.label || option.value || option.key
                })) || []
              }
            />
          ))}
          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ویرایش تیکت
            </SubmitButton>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  )
}

export default UpdateAdminTicketDetail
