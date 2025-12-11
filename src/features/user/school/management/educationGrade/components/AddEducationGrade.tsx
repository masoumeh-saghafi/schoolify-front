// React Type
import { useParams } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'

//Type Definitions
import type z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'

// Custom Hooks
import useListSummaryEducationYear from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears'
import useListSummaryEducationLevel from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationLevel'
import useAddEducationGrade from '@schoolify/features/user/school/management/educationGrade/hooks/useAddEducationGrade'

// Custom Utilities
import { addEducationLGradeData } from '@schoolify/features/user/school/management/educationGrade/utilities/addEducationLGradeData'

// Validation Schema
import { validationSchema } from '@schoolify/features/user/school/management/educationGrade/validation/educationGradeValid'

// Form schema
type SchemaProps = z.infer<typeof validationSchema>

// Custom Types
interface AddEducationGradeProps {}

const AddEducationGrade = (props: AddEducationGradeProps) => {
  // const {} = props;

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
      educationYearId: '',
      educationLevelId: '',
      title: ''
    }
  })

  const { schoolId = '' } = useParams()
  const { data: educationYearData } = useListSummaryEducationYear(schoolId)

  const selectedEducationYearId = useWatch({
    control,
    name: 'educationYearId'
  })

  const { data: educationLevelsData } = useListSummaryEducationLevel(
    selectedEducationYearId
  )

  const { mutateAsync: addEducationGrade } = useAddEducationGrade()

  // Helpers
  const dataMap: Record<string, any[]> = {
    educationYearId: educationYearData ?? [],
    educationLevelId: educationLevelsData ?? []
  }

  // Handlers
  const handleAddEducationGrade = async (data: SchemaProps) => {
    const result = await addEducationGrade({
      data: data,
      educationLevelId: data.educationLevelId
    })
    if (result.isSuccess) reset(data)
  }

  // Render
  return (
    <Box>
      <ContentBox
        label='افزودن پایه تحصیلی'
        onSubmit={handleSubmit(handleAddEducationGrade)}
        component='form'
      >
        <Grid container spacing={2}>
          <ControlledGridTextField
            key='EducationGrade'
            control={control}
            name='title'
            label='نام پایه '
          />
          {addEducationLGradeData.map(field => (
            <ControlledAutocomplete
              key={field.name}
              control={control}
              name={field.name}
              label={field.label}
              placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
              options={field.optionsMapper(dataMap[field.name])}
            />
          ))}

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

export default AddEducationGrade
