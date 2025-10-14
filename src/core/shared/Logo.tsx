// MUI Types
import type { SxProps } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'

// Custom Hooks
import useAppTheme from '../hooks/common/useAppTheme'

// MUI Components
import Typography from '@mui/material/Typography'


// Custom Types
interface LogoProps {
  title?: string
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'

  sx?: SxProps<Theme>
  fontSize?: string
  color?: string
}

const LogoTitle = (props: LogoProps) => {
  // Hooks
  const theme = useAppTheme()

  // Props
  const {
    title = 'اسکولیفای',
    fontSize,
    color = theme.palette.text.title,
    variant,
    sx
  } = props

  // Handlers
  const handleClick = () => {
    window.location.reload()
  }

  // Render
  return (
    <Typography
      {...(variant ? { variant } : {})}
      component='button'
      onClick={handleClick}
      sx={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        color: color,
        fontWeight: 'bold',
        fontSize: fontSize,
        ml: 2,
        p: 0,
        ...sx
      }}
    >
      {title}
    </Typography>
  )
}

export default LogoTitle
