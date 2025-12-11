import {
  Controller,
  type Control,
  type FieldValues,
  type Path
} from 'react-hook-form'
import { useState } from 'react'
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  addMonths,
  isSameDay
} from 'date-fns-jalali'

// MUI
import TextField from '@schoolify/core/components/base/inputs/TextField'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Grid from '../../base/inputs/Grid'

// Props
interface ControlledJalaliDatePickerProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label?: string
  disabled?: boolean
  placeholder?: string
  xs?: number
  sm?: number
}

const ControlledJalaliDatePicker = <T extends FieldValues>({
  name,
  control,
  placeholder,
  label = 'تاریخ',
  xs = 12,
  sm = 6,
  disabled = false
}: ControlledJalaliDatePickerProps<T>) => {
  const [open, setOpen] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const today = new Date()

  const toString = (date: Date | null) => {
    if (!date) return ''
    return format(date, 'yyyy/MM/dd')
  }

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

  return (
    <Grid size={{ xs, sm }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Box sx={{ position: 'relative' }}>
            <TextField
              size='small'
              fullWidth
              value={field.value || ''}
              onClick={() => !disabled && setOpen(true)}
              label={label}
              disabled={disabled}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              placeholder={placeholder}
              slotProps={{
                inputLabel: { shrink: true }
              }}
            />

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
                      <ArrowForwardIosIcon fontSize='small' />
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
                      <ArrowBackIosNewIcon fontSize='small' />
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
                            field.onChange(toString(day))
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
