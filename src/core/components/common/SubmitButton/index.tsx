import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import Button, {
  type ButtonProps,
} from "@schoolify/core/components/base/inputs/Button";
import { isDirty } from "zod/v3";

interface SubmitButtonProps /*extends ButtonProps*/ {
  isValid: boolean;
  isDirty: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const { isValid, isDirty, onClick, children, ...rest } = props;
  const theme = useAppTheme();

  const isDisabled = !isValid || !isDirty;

  const bgColor = isDisabled
    ? theme.palette.secondary.main
    : theme.palette.primary.main;

  return (
    <Button
      type="submit"
      fullWidth
      size="small"
      variant="contained"
      onClick={onClick}
      disabled={isDisabled}
      sx={{
        direction: "rtl",
        gap: 1,
        backgroundColor: bgColor,
        color: theme.palette.text.white,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
