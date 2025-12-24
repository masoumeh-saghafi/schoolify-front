// MUI Components
import Button from '@schoolify/core/components/base/inputs/Button'

// Custom Hooks
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

// Custom Types
interface SubmitButtonProps /*extends ButtonProps*/ {
  isValid: boolean
  isDirty: boolean
  children: React.ReactNode
  onClick?: () => void
}

const SubmitButton = (props: SubmitButtonProps) => {
  // Props
  const { isValid, isDirty, onClick, children, ...rest } = props

  // Hooks
  const theme = useAppTheme()

  // Helpers
  const isDisabled = !isValid || !isDirty

 const bgColor = isDisabled
    ? theme.palette.secondary.main
    : theme.palette.primary.main

  // Render
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
        backgroundColor: bgColor,
        color: theme.palette.text.white
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default SubmitButton
