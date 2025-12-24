// React Type
import {
  Controller,
  type Control,
  type FieldValues,
  type Path
} from 'react-hook-form'

// Custom Types
interface ControlledHiddenInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  defaultValue?: any
}

const ControlledHiddenInput = <T extends FieldValues>(
  props: ControlledHiddenInputProps<T>
) => {
  // Props
  const { control, name, defaultValue } = props

  // Render
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => <input type='hidden' {...field} />}
    />
  )
}

export default ControlledHiddenInput
