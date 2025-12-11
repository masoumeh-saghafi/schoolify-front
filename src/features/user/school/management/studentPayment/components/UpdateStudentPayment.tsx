// React Type
import { useForm, type Resolver } from 'react-hook-form'

//Type Definitions
import { zodResolver } from '@hookform/resolvers/zod'
import type z from 'zod'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'

// Validation Schema
import { updateStudentPaymentValidationSchema } from '@schoolify/features/user/school/management/studentPayment/validation/updateStudentPymentValidation'
import { updateStudentPaymentData } from '@schoolify/features/user/school/management/studentPayment/utilities/updateStudentData'

// Form schema
type SchemaProps = z.infer<typeof updateStudentPaymentValidationSchema>

// Custom Types
interface UpdateStudentPaymentProps {
  recordId: string
  defaultValues: SchemaProps
  onSubmit?: (id: string, updatedFields: any, row: any) => void
}

const UpdateStudentPayment = (props: UpdateStudentPaymentProps) => {
  // Props
  const { defaultValues, onSubmit, recordId } = props

  // Hooks
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isDirty }
  } = useForm({
    defaultValues,
    resolver: zodResolver(updateStudentPaymentValidationSchema)as unknown as Resolver<SchemaProps>,
    mode: 'onChange'
  })

  // Handlers
  const handleUpdateRecord = async (data: SchemaProps) => {
    onSubmit?.(recordId, data, data)
    reset(data)
  }

  // Render
  return (
    <Box>
      <ContentBox onSubmit={handleSubmit(handleUpdateRecord)} component='form'>
        <Grid container spacing={2.5}>
       {updateStudentPaymentData.map(field => (
                  <ControlledGridTextField
                    key={field.name}
                    control={control}
                    name={field.name}
                    label={field.label}
                  />
                ))}

          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ویرایش
            </SubmitButton>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  )
}

export default UpdateStudentPayment
