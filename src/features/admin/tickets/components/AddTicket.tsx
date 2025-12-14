// React Type
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

//Type Definitions
import { zodResolver } from '@hookform/resolvers/zod'
import type z from 'zod'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'

// Custom Utilities
// import { addTicketData } from '@schoolify/features/user/school/management/Ticket/utilities/addTicketData'

// Validation Schema

// import { identityTypeOptions } from '@schoolify/features/user/school/management/Ticket/validation/baseTypes'

// Custom Hooks
// import useAddTicket from '@schoolify/features/user/school/management/Ticket/hooks/useAddTicket'
import { addTicketValidationSchema } from '../validation/addTicketValidation'
import useListSummarySchools from '@schoolify/features/user/shared/school/hooks/useListSummarySchools'
import useAddTicket from '../hooks/useAddTicket'
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import Button from '@schoolify/core/components/base/inputs/Button'
import type { OptionType } from '@schoolify/core/hooks/common/useMapToOptions'
import routes from '@schoolify/core/utilities/routes'

// Form schema
type SchemaProps = z.infer<typeof addTicketValidationSchema>
const typeOptions: OptionType[] = [
  { key: 'support', value: 'پشتیبانی' },
  { key: 'sell', value: 'فروش' }
]

// Custom Types
interface AddTicketProps {}

const AddTicket = (props: AddTicketProps) => {
  // Props
  // const {} = props;

  // Hooks

  const theme = useAppTheme()

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty }
  } = useForm<SchemaProps>({
    resolver: zodResolver(addTicketValidationSchema),
    mode: 'onChange'
  })
  const { data: schoolsData = [] } = useListSummarySchools()

  const { mutateAsync: addTicket } = useAddTicket()

  // Handlers
  const handleAddTicket = async (data: SchemaProps) => {
    const payload = {
      title: data.title,
      type: data.type,
      message: { content: data.message },
      ...(data.schoolId ? { schoolId: data.schoolId } : {})
    }

    const result = await addTicket({ data: payload })
    if (result.isSuccess) reset(data)
  }

  const navigate = useNavigate()

  const handleReturnToProfile = () => {
    navigate(routes.profile.baseUrl)
  }


  // Render
  return (
    <Box>
      <ContentBox
        label='افزودن تیکت پشتیبانی'
        onSubmit={handleSubmit(handleAddTicket)}
        component='form'
      >
        <Grid container spacing={2.5}>
          <ControlledGridTextField
            key='title'
            label='موضوع'
            name='title'
            control={control}
          />

          <ControlledAutocomplete
            control={control}
            name='type'
            label='نوع پیام'
            placeholder='لطفا یک مورد را انتخاب نمایید'
            options={typeOptions}
          />
          <ControlledAutocomplete
            control={control}
            name='schoolId'
            label=' نام مدرسه'
            placeholder='لطفا یک مورد را انتخاب نمایید'
            options={[
              { key: '', value: 'هیچ‌کدام' },
              ...(schoolsData?.map(s => ({
                key: s.id,
                value: s.data?.title ?? ''
              })) ?? [])
            ]}
          />
          
            <ControlledGridTextField
              key='message'
              label='پیام'
              name='message'
              rows={5}
              multiline={true}
              control={control}
              sm={12}
              xs={12}
            />
       

          <Grid size={12}>
            <Box
              display='flex'
              justifyContent='flex-end'
              gap={2}
              sx={{ mt: 2 }}
            >
              <Button
                type='button'
                onClick={handleReturnToProfile}
                color='secondary'
                variant='outlined'
                sx={{
                  width: '25%',
                  maxWidth: '100px'
                }}
              >
                بازگشت
              </Button>

              <Button
                type='submit'
                size='small'
                variant='contained'
                disabled={!isValid || !isDirty}
                sx={{
                  width: '35%',
                  maxWidth: '130px',
                  backgroundColor: theme.palette.primary.main,
                  gap: 1,
                  direction: 'rtl'
                }}
              >
                ثبت
              </Button>

            </Box>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  )
}

export default AddTicket
