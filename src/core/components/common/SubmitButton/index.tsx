import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'
import Button, {
  type ButtonProps
} from '@schoolify/core/components/base/inputs/Button'

interface SubmitButtonProps extends ButtonProps {
  isValid?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { isValid = true, onClick, children, ...rest } = props
  const theme = useAppTheme()

  const isDisabled = !isValid

  const bgColor = isValid
    ? {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.white
      }
    : {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.white
      }
  return (
    <Button
      type='submit'
      fullWidth
      size='small'
      variant='contained'
      onClick={onClick}
      disabled={isDisabled}
      sx={{
        direction: 'rtl',
        gap: 1,
        backgroundColor: bgColor
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default SubmitButton
