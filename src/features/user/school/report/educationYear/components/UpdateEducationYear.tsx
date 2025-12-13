// React Type
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
import SubmitButton from '@schoolify/core/components/common/SubmitButton'

// Validation Schema
import { updateEducationYearValidationSchema } from '@schoolify/features/user/school/management/educationYear/validation/updateEducationYearValidation'

// Form schema
type SchemaProps = z.infer<typeof updateEducationYearValidationSchema>

// Custom Types
interface UpdateEducationYearProps {
  recordId: string
  defaultValues: SchemaProps
  onSubmit?: (id: string, updatedFields: any, row: any) => void
}

const UpdateEducationYear = (props: UpdateEducationYearProps) => {
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
    resolver: zodResolver(updateEducationYearValidationSchema),
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
          <ControlledGridTextField
            key='EducationYear'
            control={control}
            name='title'
            label='سال تحصیلی '
          />

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

export default UpdateEducationYear
