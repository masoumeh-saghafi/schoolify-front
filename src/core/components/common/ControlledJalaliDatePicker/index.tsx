// React Type
import { useState } from 'react'
import {
  Controller,
  type Control,
  type FieldValues,
  type Path
} from 'react-hook-form'

//Type Definitions
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  addMonths,
  isSameDay,
  setDate,
  setMonth,
  setYear
} from 'date-fns-jalali'

// MUI Components
import Grid from '@schoolify/core/components/base/inputs/Grid'
import Box from '@schoolify/core/components/base/inputs/Box'
import Paper from '@schoolify/core/components/base/inputs/Paper'
import TextField from '@schoolify/core/components/base/inputs/TextField'
import ClickAwayListener from '@schoolify/core/components/base/inputs/ClickAwayListener'
import IconButton from '@schoolify/core/components/base/inputs/IconButton'

// Icon Components
import { ArrowRightIcon } from '@schoolify/core/components/icon/ArrowRightIcon'
import { ArrowLeftIcon } from '@schoolify/core/components/icon/ArrowLeftIcon'

// Custom Types
interface ControlledJalaliDatePickerProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label?: string
  disabled?: boolean
  placeholder?: string
  xs?: number
  sm?: number
}

const ControlledJalaliDatePicker = <T extends FieldValues>(
  props: ControlledJalaliDatePickerProps<T>
) => {
  // Props
  const {
    name,
    control,
    placeholder,
    label = 'تاریخ',
    xs = 12,
    sm = 6,
    disabled = false
  } = props

  // States
  const [open, setOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Parse function for manual Jalali input
  const parseJalaliInput = (val: string) => {
    const [y, m, d] = val.split('/').map(Number)
    if (!y || !m || !d) return null
    try {
      let date = new Date()
      date = setYear(date, y)
      date = setMonth(date, m - 1)
      date = setDate(date, d)
      return date
    } catch {
      return null
    }
  }

  // Helpers
  const today = new Date()
  const toString = (date: Date | null) =>
    date ? format(date, 'yyyy/MM/dd') : ''

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  })

  const weekDays = [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سشنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه'
  ]

  // Render
  return (
    <Grid size={{ xs, sm }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Box sx={{ position: 'relative' }}>
            {/* Editable TextField  */}

            <TextField
              size='small'
              fullWidth
              value={field.value || ''}
              onClick={() => !disabled && setOpen(true)}
              onChange={e => {
                const val = e.target.value
                field.onChange(val)

                const parsed = parseJalaliInput(val)
                if (parsed) setCurrentMonth(parsed)
              }}
              label={label}
              disabled={disabled}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              placeholder={placeholder}
              slotProps={{
                inputLabel: { shrink: true }
              }}
            />

            {/* Calendar */}

            {open && !disabled && (
              <ClickAwayListener onClickAway={() => setOpen(false)}>
                <Paper
                  sx={{
                    position: 'absolute',
                    top: '48px',
                    right: 0,
                    zIndex: 20,
                    p: 2,
                    width: 280,
                    boxShadow: 1
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1
                    }}
                  >
                    <IconButton
                      size='small'
                      onClick={() =>
                        setCurrentMonth(addMonths(currentMonth, -1))
                      }
                    >
                      <ArrowRightIcon fontSize='small' />
                    </IconButton>
                    <Box sx={{ fontWeight: 600 }}>
                      {format(currentMonth, 'MMMM yyyy')}
                    </Box>
                    <IconButton
                      size='small'
                      onClick={() =>
                        setCurrentMonth(addMonths(currentMonth, 1))
                      }
                    >
                      <ArrowLeftIcon fontSize='small' />
                    </IconButton>
                  </Box>

                  {/* Weekdays */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      mb: 1
                    }}
                  >
                    {weekDays.map(d => (
                      <Box
                        key={d}
                        sx={{ textAlign: 'center', fontSize: '0.55rem' }}
                      >
                        {d}
                      </Box>
                    ))}
                  </Box>

                  {/* Days */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      gap: 1
                    }}
                  >
                    {daysInMonth.map(day => {
                      const isToday = isSameDay(day, today)
                      const isSelected = field.value === toString(day)

                      return (
                        <Box
                          key={day.toString()}
                          sx={{
                            textAlign: 'center',
                            cursor: 'pointer',
                            p: 0.5,
                            borderRadius: 1,
                            bgcolor: isSelected
                              ? 'primary.main'
                              : isToday
                              ? 'secondary.light'
                              : 'transparent',
                            color: isSelected
                              ? 'primary.contrastText'
                              : 'text.primary',
                            fontWeight: isToday ? 700 : 400,
                            '&:hover': {
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText'
                            }
                          }}
                          onClick={() => {
                            const val = toString(day)
                            field.onChange(val)
                            setCurrentMonth(day)
                            setOpen(false)
                          }}
                        >
                          {format(day, 'd')}
                        </Box>
                      )
                    })}
                  </Box>
                </Paper>
              </ClickAwayListener>
            )}
          </Box>
        )}
      />
    </Grid>
  )
}

export default ControlledJalaliDatePicker
