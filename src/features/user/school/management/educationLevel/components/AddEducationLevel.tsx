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

import Box from '@schoolify/core/components/base/inputs/Box'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import Grid from '@schoolify/core/components/base/inputs/Grid'
import ControlledGridTextField from '@schoolify/core/components/common/ControlledGridTextField'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'

import useAddEucationLevel from '../hooks/useAddEducationLevel'
import { validationSchema } from '../validation/educationLevelValid'
import useListSummaryEducationYear from '@schoolify/features/user/shared/school/hooks/useListSummaryEducationYears'

type SchemaProps = z.infer<typeof validationSchema>

interface AddEucationLevelProps {}

const AddEucationLevel = (props: AddEucationLevelProps) => {
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

  const { data: educationYearData } = useListSummaryEducationYear(schoolId)
  const { mutateAsync: addEucationLevel } = useAddEucationLevel()
  // const options = (educationYearData ??
  //   []) as BaseIdDataEntity<ListSummaryEducationYearEntity>[]

  // const options =
  //   data?.data?.data?.map(item => ({
  //     key: item.id,
  //     value: item.data.title
  //   })) ?? []

  // Handlers
  const handleAddEucationLevel = async (data: SchemaProps) => {
    const result = await addEucationLevel({
      data: data,
      educationYearId: data.educationYearId
    })
    if (result.isSuccess) reset()
  }

  // Render
  return (
    <Box>
      <ContentBox
        label='افزودن مقطع تحصیلی'
        onSubmit={handleSubmit(handleAddEucationLevel)}
        component='form'
      >
        <Grid container spacing={2}>
          <ControlledGridTextField
            key='eucationLevel'
            control={control}
            name='title'
            label='مقطع تحصیلی '
          />
          {/* <ControlledAutocomplete
            control={control}
            name='educationYearId'
            label='سال تحصیلی'
            placeholder='لطفا یک سال را انتخاب نمایید'
            options={educationYearData?.data.data?.map()}
            
          /> */}

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

export default AddEucationLevel
