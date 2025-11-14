// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'

// Feature Components
import { validationSchema } from '@schoolify/features/user/school/management/students/validation/studentInfovalidation'
import { addStudentData } from '@schoolify/features/user/school/management/students/utilities/addStudentData'
import { identityTypeOptions } from '@schoolify/features/user/school/management/students/validation/identityType'

// Custom Hooks
import useAddStudent from '@schoolify/features/user/school/management/students/hooks/useAddStudent'

// React Type
import { useParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'

//Type Definitions
import { zodResolver } from '@hookform/resolvers/zod'
import type z from 'zod'

type SchemaProps = z.infer<typeof validationSchema>

interface AddStudentProps {}

const AddStudent = (props: AddStudentProps) => {
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
    mode: 'onChange'
  })

  const { mutateAsync: addStudent } = useAddStudent()

  // Handlers
  const handleAddStudent = async (data: SchemaProps) => {
    const result = await addStudent({ data: data, schoolId: schoolId })
    if (result.isSuccess) reset()
  }

  // Render
  return (
    <Box>
      <ContentBox
        label='افزودن دانش آموز'
        onSubmit={handleSubmit(handleAddStudent)}
        component='form'
      >
        <Grid container spacing={2}>
          {addStudentData.map(field => (
            <ControlledGridTextField
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
            />
          ))}

          <ControlledAutocomplete
            control={control}
            name='identityType'
            label='ملیت'
            placeholder='لطفا یک مورد را انتخاب نمایید'
            options={identityTypeOptions}
            size='small'
          />

          {/* Hidden input for schoolId */}
          <Controller
            name='schoolId'
            control={control}
            defaultValue={schoolId}
            render={({ field }) => <input type='hidden' {...field} />}
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

export default AddStudent
