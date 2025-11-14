// MUI Components
import Typography from '@schoolify/core/components/base/inputs/Typography'

//Type Definitions
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

dayjs.extend(jalaliday)

// Custom Types
interface FormattedDateProps {
  date?: number | null
  showTime?: boolean
}

const FormattedDate = (props: FormattedDateProps) => {

  // Props
  const { date, showTime } = props
 
 
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
