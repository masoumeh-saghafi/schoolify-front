// React Type
import { useParams } from 'react-router-dom'
import { useForm, useWatch } from 'react-hook-form'

//Type Definitions
import { zodResolver } from '@hookform/resolvers/zod'
import type z from 'zod'

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
import useListSummaryEducationGrade from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationGrade'
import useAddClass from '@schoolify/features/user/school/management/class/hooks/useAddClass'

// Custom Utilities
import { addClassData } from '@schoolify/features/user/school/management/class/utilities/addClassData'

// Validation Schema
import { validationSchema } from '@schoolify/features/user/school/management/class/validation/classValid'

// Form schema
type SchemaProps = z.infer<typeof validationSchema>

interface AddClassProps {}

const AddClass = (props: AddClassProps) => {
  // Props
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
      educationGradeId: '',
      title: ''
    }
  })

  const selectedEducationYearId = useWatch({
    control,
    name: 'educationYearId'
  })
  const selectedEducationLevelId = useWatch({
    control,
    name: 'educationLevelId'
  })

  const { schoolId = '' } = useParams()
  const { data: educationYearData } = useListSummaryEducationYear(schoolId)
  const { data: educationLevelsData } = useListSummaryEducationLevel(
    selectedEducationYearId
  )

  const { data: educationGradesData } = useListSummaryEducationGrade(
    selectedEducationLevelId
  )

  const { mutateAsync: addClass } = useAddClass()

  const dataMap: Record<string, any[]> = {
    educationYearId: educationYearData ?? [],
    educationLevelId: educationLevelsData ?? [],
    educationGradeId: educationGradesData ?? []
  }

  // Handlers
  const handleAddClass = async (data: SchemaProps) => {
    const result = await addClass({
      data: data,
      educationGradeId: data.educationGradeId
    })
    if (result.isSuccess) reset(data)
  }

  // Render
  return (
    <Box>
      <ContentBox
        label='افزودن  کلاس'
        onSubmit={handleSubmit(handleAddClass)}
        component='form'
      >
        <Grid container spacing={2}>
          {addClassData.map(field => (
            <ControlledAutocomplete
            key={field.name}
            control={control}
            name={field.name}
            label={field.label}
            placeholder={`لطفا ${field.label.toLowerCase()} را انتخاب نمایید`}
            options={field.optionsMapper(dataMap[field.name])}
            />
          ))}
          <ControlledGridTextField
                       control={control}
            name='title'
            label='نام کلاس '
            placeholder='نام کلاس مورد نظر را وارد نمایید.'
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

export default AddClass
