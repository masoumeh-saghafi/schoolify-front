// MUI Components
import TextField from '@schoolify/core/components/base/inputs/TextField'

// Custom Types
interface BaseFieldProps {
  label: string
  value?: string
  type?: string
  readOnly?: boolean
}

const BaseField = (props: BaseFieldProps) => {
  // Props

  const { label, value, type = 'text', readOnly = true } = props

  // Render
  return (
    <TextField
      label={label}
      type={type}
      size='small'
      value={value || ''}
      fullWidth
      slotProps={{
        inputLabel: {
          shrink: true
        },
        input: {
          readOnly
        }
      }}
    />
  )
}

export default BaseField
