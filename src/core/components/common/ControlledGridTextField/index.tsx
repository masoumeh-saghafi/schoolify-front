// React Type
import {
  Controller,
  type Control,
  type FieldValues,
  type Path
} from 'react-hook-form'

// MUI Components
import TextField from '@schoolify/core/components/base/inputs/TextField'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Custom Types
interface FormGridTextFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: string
  helperText?: string
  xs?: number
  sm?: number
  placeholder?: string
  rows?: number 
  multiline?:boolean

}

const ControlledGridTextField = <T extends FieldValues>(
  Props: FormGridTextFieldProps<T>
) => {
  // Props
  const { control, name, label,rows,multiline, helperText,placeholder, xs = 12, sm = 6, ...props } = Props
  // Render
  return (
    <Grid size={{ xs, sm }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <TextField
              {...field}
              {...props}
              label={label}
              fullWidth
              rows={rows}
              multiline={multiline}
              size='small'
              error={!!fieldState.error}
              helperText={helperText ?? fieldState.error?.message ?? ''}
              placeholder={placeholder}
              slotProps={{
                inputLabel: {
                  shrink: true
                }
              }}
            />
          </>
        )}
      />
    </Grid>
  )
}

export default ControlledGridTextField
