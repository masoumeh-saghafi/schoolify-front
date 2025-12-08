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

import { validationSchema } from '../validation/userRoleValidation'
import useAddUserRole from '../hooks/useAddUserRole'
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'
import { roleTypeOptions } from '../validation/baseTypes'
type SchemaProps = z.infer<typeof validationSchema>

interface AddUserRoleProps {}

const AddUserRole = (props: AddUserRoleProps) => {
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

  const { mutateAsync: addUserRole } = useAddUserRole()

  // Handlers
  const handleAddUserRole = async (data: SchemaProps) => {
    const result = await addUserRole({ data: data, schoolId: schoolId })
    if (result.isSuccess) reset()
  }

  // Render
  return (
    <Box>
      <ContentBox
        label='افزودن دسترسی '
        onSubmit={handleSubmit(handleAddUserRole)}
        component='form'
      >
        <Grid container spacing={2}>
          <ControlledGridTextField
            label='شماره موبایل'
            key='UserRole'
            control={control}
            name='phoneNumber'
          />

          <ControlledAutocomplete
            label=' نوع دسترسی'
            name='role'
            control={control}
            options={roleTypeOptions}
            placeholder=' لطفا مورد را انتخاب نمایید'
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

export default AddUserRole
