// React Type
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

//Type Definitions
import type z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// MUI Components
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'
import ControlledTextField from '@schoolify/core/components/common/ControlledTextField'
import AsyncStateHandler from '@schoolify/core/components/common/AsyncStateHandler'

// Custom Hooks
import useSchoolInfo from '@schoolify/features/user/school/management/information/hooks/useInfoSchool'
import useUpdateSchoolName from '@schoolify/features/user/school/management/information/hooks/useUpdateUserProfile'

// Feature Components
import { validationSchema } from '@schoolify/features/user/school/management/information/validation/titleValidation'

// Form schema
type SchemaProps = z.infer<typeof validationSchema>

const ChangeSchoolName = () => {

  // Hooks
  const { schoolId = '' } = useParams()
  const { data, isLoading, error } = useSchoolInfo(schoolId)
  const { mutateAsync: updateSchoolName } = useUpdateSchoolName()

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty }
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange'
  })



  // Handlers
  const handleChangeSchoolName = async (data: SchemaProps) => {
    await updateSchoolName({ data, schoolId })
  }

  // Render
  return (
    <ContentBox
      label='ویرایش مدرسه'
      component='form'
      onSubmit={handleSubmit(handleChangeSchoolName)}
    >
      <AsyncStateHandler isLoading={isLoading} error={error}>
        <Grid container sx={{ margin: 2 }} spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <ControlledTextField
              control={control}
              name='title'
              label='نام'
              defaultValue={data?.data?.title}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ویرایش اطلاعات
            </SubmitButton>
          </Grid>
        </Grid>
      </AsyncStateHandler>
    </ContentBox>
  )
}

export default ChangeSchoolName
