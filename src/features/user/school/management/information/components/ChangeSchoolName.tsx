import type z from 'zod'
import { titleValidationSchema } from '@schoolify/features/user/school/management/information/validation/titleValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import useSchoolInfo from '@schoolify/features/user/school/management/information/hooks/useInfoSchool'
import useListSummarySchools from '@schoolify/features/user/shared/school/hooks/useListSummarySchools'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import ControlledTextField from '@schoolify/core/components/common/ControlledTextField'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'
import { updateSchoolName } from '@schoolify/features/user/school/management/information/utilities/api/api'
import AsyncStateHandler from '@schoolify/core/components/common/AsyncStateHandler'

type SchemaProps = z.infer<typeof titleValidationSchema>

const ChangeSchoolName = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm<SchemaProps>({
    resolver: zodResolver(titleValidationSchema),
    mode: 'onChange'
  })

  const { schoolId = '' } = useParams()
  const {
    data,
    refetch: schoolRefetch,
    isLoading,
    error
  } = useSchoolInfo(schoolId)
  const { refetch: sidebarSchoolsRefetch } = useListSummarySchools()

  const onSubmitChangeSchoolName = async (data: SchemaProps) => {
    try {
      await updateSchoolName(data, schoolId)

      await Promise.all([schoolRefetch(), sidebarSchoolsRefetch()])
    } catch (error) {
      alert('مشکلی در دریافت اطلاعات وجود دارد')
    }
  }

  return (
    <ContentBox
      label='ویرایش مدرسه'
      component='form'
      onSubmit={handleSubmit(onSubmitChangeSchoolName)}
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
            <SubmitButton disabled={!isValid}>ویرایش اطلاعات</SubmitButton>
          </Grid>
        </Grid>
      </AsyncStateHandler>
    </ContentBox>
  )
}

export default ChangeSchoolName
