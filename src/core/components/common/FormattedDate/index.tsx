
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'
import Typography from '@schoolify/core/components/base/inputs/Typography'

dayjs.extend(jalaliday)

interface FormattedDateProps {
  date?: number | null
  showTime?: boolean
}

const FormattedDate = ({ date, showTime }: FormattedDateProps) => {
  if (!date || !dayjs(date).isValid()) {
    return (
      <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        ---
      </Typography>
    )
  }

  let formatStr = 'YYYY/MM/DD'
  if (showTime) {
    formatStr = 'HH:mm ' + formatStr
  }

  const formatted = dayjs(date)
    .calendar('jalali')
    .locale('fa')
    .format(formatStr)

  return <span>{formatted}</span>
}

export default FormattedDate
