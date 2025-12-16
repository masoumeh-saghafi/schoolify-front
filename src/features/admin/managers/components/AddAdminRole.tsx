// React Type
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

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

// Custom Utilities

// Validation Schema
import { addAdminRoleValidationSchema, roleTypeOptions } from '../validation/addAdminRoleValidation'
import useAddAdminRole from '../hooks/useAddAdminRole'
import { addAdminInfoData } from '../utilities/addAdminInfoData'


// Form schema
type SchemaProps = z.infer<typeof addAdminRoleValidationSchema>

// Custom Types
interface AddAdminRoleProps {}

const AddAdminRole = (props: AddAdminRoleProps) => {
  // const {} = props;

  
  // Hooks
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isDirty }
  } = useForm<SchemaProps>({
    resolver: zodResolver(addAdminRoleValidationSchema),
    mode: 'onChange'
   
  })


  const { mutateAsync: addAdminRole } = useAddAdminRole()

  // Handlers
  const handleAddAdminRole = async (data: SchemaProps) => {
    const result = await addAdminRole({ data: data})
    if (result.isSuccess) reset(data)
  }

  // Render
  return (
    <Box>
      <ContentBox
        label='افزودن دسترسی '
        onSubmit={handleSubmit(handleAddAdminRole)}
        component='form'
      >
        <Grid container spacing={2}>
      

              {addAdminInfoData.map(field => (
                      <ControlledGridTextField
                        key={field.name}
                        control={control}
                        name={field.name}
                        label={field.label}
                      />
                    ))}

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

export default AddAdminRole
