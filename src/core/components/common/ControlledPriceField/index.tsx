// React Type
import { useState, useEffect } from 'react'
import { Controller } from 'react-hook-form'

// MUI Components
import TextField from '@schoolify/core/components/base/inputs/TextField'
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Custom Types
interface ControlledPriceFieldProps {
  control: any
  name: string
  label?: string
  xs?: number
  sm?: number
}

// format price
const formatPrice = (value: string | number) => {
  if (!value) return ''
  const num = Number(String(value).replace(/,/g, ''))
  return isNaN(num) ? '' : num.toLocaleString('en-US')
}

// parse price
const parsePrice = (value: string) => {
  const cleaned = value.replace(/,/g, '')
  const num = Number(cleaned)
  return isNaN(num) ? undefined : num
}

const ControlledPriceField = (props: ControlledPriceFieldProps) => {
  // Props
  const { control, name, label, xs = 12, sm = 6 } = props

  // States
  const [displayValue, setDisplayValue] = useState('')

  // Render
  return (
    <Grid size={{ xs, sm }}>
      <Controller
        name={name}
        control={control}
        defaultValue={0}
        render={({ field, fieldState }) => {
          // sync RHF value → formatted UI value
          useEffect(() => {
            if (field.value !== parsePrice(displayValue)) {
              setDisplayValue(formatPrice(field.value))
            }
          }, [field.value])

          return (
            <TextField
              label={label}
              value={displayValue}
              fullWidth
              size='small'
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              onChange={e => {
                const raw = e.target.value
                const parsed = parsePrice(raw)

                // update UI field
                setDisplayValue(formatPrice(raw))

                // push real numeric value to RHF
                field.onChange(parsed)
              }}
              slotProps={{
                htmlInput: {
                  inputMode: 'numeric',
                  pattern: '[0-9,]*'
                },
                inputLabel: {
                  shrink: true
                }
              }}
            />
          )
        }}
      />
    </Grid>
  )
}

export default ControlledPriceField
