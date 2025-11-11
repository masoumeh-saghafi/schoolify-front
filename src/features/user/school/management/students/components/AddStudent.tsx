import type z from 'zod'
import { validationSchema } from '../validation/studentInfovalidation'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { postAddStudent } from '../utilities/api/api'
import Box from '@schoolify/core/components/base/inputs/Box'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import { addStudentData } from '../utilities/addStudentData'
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'
import { identityTypeOptions } from '../validation/identityType'

type SchemaProps = z.infer<typeof validationSchema>

interface AddStudentProps {
  onStudentAdded?: () => void
}

const AddStudent = (props: AddStudentProps) => {
  const { onStudentAdded } = props
  const { schoolId = '' } = useParams()

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid }
  } = useForm<SchemaProps>({
    resolver: zodResolver(validationSchema),
    mode: 'onChange'
  })

  const onSubmitAddStudent = async (data: SchemaProps) => {
    try {
      const response = await postAddStudent({ ...data, schoolId })

      const studentId = response.data?.id

      if (!studentId) {
        throw new Error('خطا در دریافت شناسه دانش‌آموز')
      }
      if (onStudentAdded) {
        onStudentAdded()
      }

      reset()
    } catch (error: any) {
      alert('مشکلی در دریافت اطلاعات وجود دارد')
    }
  }
  return (
    <Box>
      <ContentBox
        label='افزودن دانش آموز'
        onSubmit={handleSubmit(onSubmitAddStudent)}
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
             

              <Grid size={{ xs: 12, sm: 6 }}>
                <SubmitButton isValid={isValid}>ایجاد</SubmitButton>
              </Grid>
          
        </Grid>
      </ContentBox>
    </Box>
  )
}

export default AddStudent
