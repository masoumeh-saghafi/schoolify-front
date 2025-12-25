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
import { addStudentData } from '@schoolify/features/user/school/management/student/utilities/addStudentData'

// Validation Schema
import { addStudentValidationSchema } from '@schoolify/features/user/school/management/student/validation/addStudentValidationSchema'
import { identityTypeOptions } from '@schoolify/features/user/school/management/student/validation/baseTypes'

// Custom Hooks
import useAddStudent from '@schoolify/features/user/school/management/student/hooks/useAddStudent'


// Form schema
type SchemaProps = z.infer<typeof addStudentValidationSchema>

// Custom Types
interface AddStudentProps {}

const AddStudent = (props: AddStudentProps) => {
  // Props
  // const {} = props;

  // Hooks
  const { schoolId = '' } = useParams()

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty }
  } = useForm<SchemaProps>({
    resolver: zodResolver(addStudentValidationSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      fatherName: '',
      parentPhoneNumber: '',
      identityCode: '',
      identityType: '',
      schoolId: schoolId ?? ''
    }
  })
  const { mutateAsync: addStudent } = useAddStudent()

  // Handlers
  const handleAddStudent = async (data: SchemaProps) => {
    const result = await addStudent({ data: data, schoolId: schoolId })
    if (result.isSuccess) reset(data)
  }

  // Render
  return (
    <Box>
      <ContentBox
        label='افزودن دانش آموز'
        onSubmit={handleSubmit(handleAddStudent)}
        component='form'
      >
        <Grid container spacing={2.5}>
          {addStudentData.map(field => (
            <ControlledGridTextField
              placeholder={`لطفا ${field.label} را وارد نمایید.`}
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
          />

          {/* Hidden input for schoolId */}
          <ControlledHiddenInput control={control} name='schoolId' />

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
