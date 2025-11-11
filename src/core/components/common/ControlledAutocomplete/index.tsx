import {
  Controller,
  type Control,
  type FieldValues,
  type Path
} from 'react-hook-form'
import Autocomplete from '@schoolify/core/components/base/inputs/Autocomplete'
import TextField from '@schoolify/core/components/base/inputs/TextField'
import Grid from '@schoolify/core/components/base/inputs/Grid'

interface OptionType {
  key: string
  value: string
}

interface ControlledAutocompleteProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: string
  placeholder?: string
  options: OptionType[]
  size?: 'small' | 'medium'
  xs?: number
  sm?: number
}

const ControlledAutocomplete = <T extends FieldValues>(
  props: ControlledAutocompleteProps<T>
) => {
  const {
    control,
    name,
    label,
    placeholder,
    options,
    size = 'small',
    xs = 12,
    sm = 6
  } = props

  return (
    <Grid size={{ xs, sm }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Autocomplete
            size={size}
            options={options}
            getOptionLabel={option => option.value}
            value={options.find(opt => opt.key === field.value) || null}
            onChange={(_, newValue) =>
              field.onChange(newValue ? newValue.key : '')
            }
            renderInput={params => (
              <TextField
                {...params}
                label={label}
                placeholder={placeholder}
                error={!!fieldState.error}
                helperText={fieldState.error?.message ?? ''}
              />
            )}
            slotProps={{
              listbox: {
                sx: { fontSize: '0.75rem' }
              }
            }}
          />
        )}
      />
    </Grid>
  )
}

export default ControlledAutocomplete
