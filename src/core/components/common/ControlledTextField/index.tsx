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
}

const FormTextField = <T extends FieldValues>(props: FormTextFieldProps<T>) => {
  const { control, name, label, ...rest } = props
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...rest}
          label={label}
          fullWidth
          size='small'
          error={!!fieldState.error}
          helperText={fieldState.error?.message ??''}
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

export default FormTextField
