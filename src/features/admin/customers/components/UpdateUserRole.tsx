// React Type
import { useForm } from 'react-hook-form'

//Type Definitions
import { zodResolver } from '@hookform/resolvers/zod'
import type z from 'zod'

// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import ControlledAutocomplete from '@schoolify/core/components/common/ControlledAutocomplete'
import SubmitButton from '@schoolify/core/components/common/SubmitButton'

// Custom Utilities
import { updateUserRoleValidationSchema } from '@schoolify/features/user/school/management/userRole/validation/updateUserRoleValid'

// Validation Schema
import { roleTypeOptions } from '@schoolify/features/user/school/management/userRole/validation/baseTypes'

// Form schema
type SchemaProps = z.infer<typeof updateUserRoleValidationSchema>


// Custom Types
interface UpdateUserRoleProps {
  recordId: string
  defaultValues: SchemaProps
  onSubmit?: (id: string, updatedFields: any, row: any) => void
}

const UpdateUserRole = (props: UpdateUserRoleProps) => {
  // Props
  const { defaultValues, onSubmit, recordId } = props

  // Hooks
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isDirty }
  } = useForm({
    defaultValues,
    resolver: zodResolver(updateUserRoleValidationSchema),
    mode: 'onChange'
  })

  // Handlers
  const handleUpdateRecord = async (data: SchemaProps) => {
    onSubmit?.(recordId, data, data)
    reset(data)
  }

  // Render
  return (
    <Box>
      <ContentBox onSubmit={handleSubmit(handleUpdateRecord)} component='form'>
        <Grid container spacing={2.5}>
          <ControlledAutocomplete
            label='دسترسی'
            name='role'
            control={control}
            options={roleTypeOptions}
            placeholder='لطفا یک مورد را انتخاب نمایید'
          />

          <Grid size={{ xs: 12, sm: 6 }}>
            <SubmitButton isValid={isValid} isDirty={isDirty}>
              ویرایش
            </SubmitButton>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  )
}

export default UpdateUserRole
