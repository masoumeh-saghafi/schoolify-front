// React Type
import {
  Controller,
  type Control,
  type FieldValues,
  type Path
} from 'react-hook-form'

// MUI Components
import TextField from '@schoolify/core/components/base/inputs/TextField'

// Custom Types
interface FormTextFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: string
  defaultValue?: any
}

const ControlledTextField = <T extends FieldValues>(
  props: FormTextFieldProps<T>
) => {

  // Props
  const { control, name, defaultValue, label, ...rest } = props

  // Render
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ''}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...rest}
          label={label}
          fullWidth
          size='small'
          error={!!fieldState.error}
          helperText={fieldState.error?.message ?? ''}
          slotProps={{
            inputLabel: {
              shrink: true
            }
          }}
        />
      )}
    />
  )
}

export default ControlledTextField
