// MUI Components
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import BaseField from '@schoolify/core/components/common/BaseField/index'

// Custom Types
interface DetailFieldProps {
  label: string
  value?: string | number | null
  xs?: number
  sm?: number
  type?: string
  readOnly?: boolean
}

const DetailField = (props: DetailFieldProps) => {
  // Props
  const {
    label,
    value,
    xs = 12,
    sm = 6,
    type = 'text',
    readOnly = true
  } = props

  // Render
  return (
    <Grid size={{ xs, sm }} sx={{ mb: 1 }}>
      <BaseField
        label={label}
        value={value ? String(value) : ''}
        type={type}
        readOnly={readOnly}
      />
    </Grid>
  )
}

export default DetailField
