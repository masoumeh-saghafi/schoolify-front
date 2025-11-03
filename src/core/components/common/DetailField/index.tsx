// src/features/user/profile/components/DetailField.tsx

import Grid from '@schoolify/core/components/base/inputs/Grid'
import BaseField from '@schoolify/core/components/common/BaseField/index'

interface DetailFieldProps {
   label: string
   value?: string | number | null
   xs?: number
   sm?: number
   type?: string
   readOnly?: boolean
}

const DetailField = (props: DetailFieldProps) => {
   const {
  label, value, xs = 12, sm = 6, type = 'text', readOnly = true
}
=props
  return (
    <Grid size={{ xs, sm }} sx={{ mb:1}}>
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
