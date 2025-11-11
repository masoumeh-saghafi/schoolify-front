import {
  Controller,
  type Control,
  type FieldValues,
  type Path
} from 'react-hook-form'
import TextField from '@schoolify/core/components/base/inputs/TextField'

interface FormTextFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: string
  defaultValue?: any
}

const ControlledTextField = <T extends FieldValues>(
  props: FormTextFieldProps<T>
) => {
  const { control, name, defaultValue, label, ...rest } = props
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
