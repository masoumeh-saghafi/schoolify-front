import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";

// MUI Components
import Typography from "@schoolify/core/components/base/inputs/Typography";
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";

// Feature Components
import { codeSchema } from "@schoolify/features/shared/authentication/validations/phoneValidation";
import OtpInput from "@schoolify/features/shared/authentication/components/login/OtpInput";

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
  const theme = useAppTheme();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VerifyCodeFormProps>({
    resolver: zodResolver(codeSchema),
    mode: "onChange",
    defaultValues: {
      code: "",
    },
  });

  // Auto-redirect to send code when timer expires
  useEffect(() => {
    if (countdown <= 0) {
      onBack();
    }
  }, [countdown, onBack]);

  // Calculate progress for circular timer
  const progress = (countdown / 120) * 100;
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  // Render
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%", maxWidth: 400 }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.9rem",
          mb: 3,
          color: theme.palette.text.primary,
        }}
      >
        لطفا کد ۶ رقمی ارسال شده را وارد نمایید.
      </Typography>

      {/* OTP Input */}
      <Box sx={{ mb: 3 }}>
        <Controller
          name="code"
          control={control}
          render={({ field }) => (
            <OtpInput
              value={field.value}
              onChange={field.onChange}
              error={!!errors.code}
            />
          )}
        />
        {errors.code && (
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.error.main,
              display: "block",
              textAlign: "center",
              mt: 1,
            }}
          >
            {errors.code.message}
          </Typography>
        )}
      </Box>

      {/* Timer */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          gap: 1,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: 50,
            height: 50,
          }}
        >
          <svg
            width="50"
            height="50"
            style={{ transform: "rotate(-90deg)" }}
          >
            {/* Background circle */}
            <circle
              cx="25"
              cy="25"
              r="22"
              fill="none"
              stroke={theme.palette.grey[300]}
              strokeWidth="3"
            />
            {/* Progress circle */}
            <circle
              cx="25"
              cy="25"
              r="22"
              fill="none"
              stroke={
                countdown > 30
                  ? theme.palette.primary.main
                  : countdown > 10
                  ? theme.palette.warning.main
                  : theme.palette.error.main
              }
              strokeWidth="3"
              strokeDasharray={`${(progress / 100) * 138.23} 138.23`}
              strokeLinecap="round"
            />
          </svg>
          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "0.7rem",
              fontWeight: "bold",
              color:
                countdown > 30
                  ? theme.palette.primary.main
                  : countdown > 10
                  ? theme.palette.warning.main
                  : theme.palette.error.main,
            }}
          >
            {`${minutes.toString().padStart(2, "0")}:${seconds
              .toString()
              .padStart(2, "0")}`}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.primary,
            fontSize: "0.85rem",
          }}
        >
          زمان مانده تا دریافت مجدد کد
        </Typography>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
        <Button
          type="submit"
          variant="contained"
          disabled={countdown <= 0}
          sx={{
            flex: 1,
            py: 1.5,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.white,
            fontWeight: "bold",
            "&:disabled": {
              backgroundColor: theme.palette.grey[300],
            },
          }}
        >
          ورود
        </Button>
        <Button
          onClick={onBack}
          variant="contained"
          sx={{
            width: "35%",
            py: 1.5,
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
