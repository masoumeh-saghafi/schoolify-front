// MUI Components

// Core Components

// Feature Components

// Custom Hooks

// React Type
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

//Type Definitions
import { zodResolver } from '@hookform/resolvers/zod'
import type z from 'zod'
import { validationSchema } from '../validation/educationYearsValid'

import Box from '@schoolify/core/components/base/inputs/Box'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'
import ControlledHiddenInput from '@schoolify/core/components/common/ControlledHiddenInput'
import useAddEucationYear from '@schoolify/features/user/school/management/educationYear/hooks/useAddEducationYear'
type SchemaProps = z.infer<typeof validationSchema>

interface AddEucationYearProps {}

const AddEucationYear = (props: AddEucationYearProps) => {
  // const {} = props;
  const { schoolId = '' } = useParams()

  // Hooks
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty }
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
     defaultValues: {
    title: '',
    schoolId: schoolId ?? ''
  }
  })

  const { mutateAsync: addEucationYear } = useAddEucationYear()

  // Handlers
  const handleAddEucationYear = async (data: SchemaProps) => {
    const result = await addEucationYear({ data: data, schoolId: schoolId })
    if (result.isSuccess) reset()
  }

  // Render
  return (
    <Box>
      <ContentBox
        label='افزودن سال تحصیلی'
        onSubmit={handleSubmit(handleAddEucationYear)}
        component='form'
      >
        <Grid container spacing={2}>
          <ControlledGridTextField
            key='eucationYear'
            control={control}
            
            name='title'
            label='سال تحصیلی '
          />

          {/* Hidden input for schoolId */}
          <ControlledHiddenInput
            control={control}
            name='schoolId'
           
          />

          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ایجاد
            </SubmitButton>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  )
}

export default AddEucationYear
