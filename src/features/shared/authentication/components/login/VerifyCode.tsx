import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// MUI Components
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import FormField from "@schoolify/core/components/base/inputs/FormField";
import { useForm, type FieldErrors, type SubmitHandler } from "react-hook-form";

// Feature Components
import { codeSchema } from "@schoolify/features/shared/authentication/validations/phoneValidation";

// Custom Types
export type VerifyCodeFormProps = z.infer<typeof codeSchema>;

interface VerifyCodeProps {
  onSubmit: SubmitHandler<VerifyCodeFormProps>;
  onBack: () => void;
  countdown: number;
}

const VerifyCode = (props: VerifyCodeProps) => {
  const { onSubmit, onBack, countdown } = props;

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyCodeFormProps>({
    resolver: zodResolver(codeSchema),
    mode: "onChange",
  });

  const theme = useAppTheme();

  // Render
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%", maxWidth: 400 }}
    >
      <Typography sx={{ direction: "rtl", fontSize: "0.75rem", mb: 1 }}>
        لطفا کد دریافتی را وارد نمایید.
      </Typography>
      <FormField
        name="code"
        type="text"
        placeholder="کد ارسال شده را وارد کنید"
        register={register}
        error={(errors as FieldErrors<VerifyCodeFormProps>).code}
      />

      <Typography
        variant="body2"
        sx={{ textAlign: "center", fontSize: "0.75rem", mb: 1 }}
      >
        {countdown > 0
          ? `${Math.floor(countdown / 60)
              .toString()
              .padStart(2, "0")}:${(countdown % 60)
              .toString()
              .padStart(2, "0")} زمان مانده تا دریافت مجدد کد`
          : "زمان کد تمام شد"}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button
          type="submit"
          variant="contained"
          disabled={countdown <= 0}
          sx={{ width: "50%" }}
        >
          ورود
        </Button>
        <Button
          onClick={onBack}
          variant="contained"
          sx={{
            width: "30%",
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.text.white,
          }}
        >
          بازگشت
        </Button>
      </Box>
    </Box>
  );
};

export default VerifyCode;
