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
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'
import ControlledHiddenInput from '@schoolify/core/components/common/ControlledHiddenInput'

// Custom Utilities
// import { addTicketData } from '@schoolify/features/user/school/management/Ticket/utilities/addTicketData'

// Validation Schema

// import { identityTypeOptions } from '@schoolify/features/user/school/management/Ticket/validation/baseTypes'

// Custom Hooks
// import useAddTicket from '@schoolify/features/user/school/management/Ticket/hooks/useAddTicket'
import { addTicketValidationSchema } from '../validation/addTicketValidation'
import useListSummarySchools from '@schoolify/features/user/shared/school/hooks/useListSummarySchools'
import { useState } from 'react'
import useAddTicket from '../hooks/useAddticket'
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import Button from '@schoolify/core/components/base/inputs/Button'

// Form schema
type SchemaProps = z.infer<typeof addTicketValidationSchema>
const typeOptions = [
  { id: 'support', title: 'پشتیبانی' },
  { id: 'sell', title: 'فروش' }
]

// Custom Types
interface AddTicketProps {}

const AddTicket = (props: AddTicketProps) => {
  // Props
  // const {} = props;

  // Hooks
  const { schoolId = '' } = useParams()
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
  const [selectedSchool, setSelectedSchool] = useState<any>(null)

  const { mutateAsync: addTicket } = useAddTicket()

  // Handlers
  const handleAddTicket = async (data: SchemaProps) => {
    const result = await addTicket({ data: data })
    if (result.isSuccess) reset(data)
  }

  const handleReset = () => {
    reset()
    setSelectedSchool(null)
  }

  const bgColor = isValid
    ? {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.white
      }
    : {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.white
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
              { id: '', title: 'هیچ‌کدام' },
              ...schoolsData.map(s => ({
                id: s.id,
                title: s.data?.title
              }))
            ]}
          />
          <ControlledGridTextField
            key='message'
            label='پیام'
            name='message'
            rows={5}
            multiline={true}
            control={control}
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
                onClick={handleReset}
                color='secondary'
                variant='outlined'
                sx={{
                  width: '25%',
                  maxWidth: '100px'
                }}
              >
                لغو
              </Button>

              <Button
                type='submit'
                size='small'
                variant='contained'
                disabled={!isValid}
                sx={{
                  width: '35%',
                  maxWidth: '130px',
                  backgroundColor: bgColor,
                  gap: 1,
                  direction: 'rtl'
                }}
              >
                ارسال
              </Button>
            </Box>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  )
}

export default AddTicket
