import { z } from "zod";
import { phoneSchema } from "@schoolify/features/shared/authentication/validations/phoneValidation";
import { useForm, type FieldErrors, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Typography } from "@mui/material";
import type { theme } from "@schoolify/core/style/themes/muiTheme";
import FormField from "@schoolify/core/components/base/inputs/FormField";
import { useNavigate } from "react-router-dom";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import { sendCode } from "../../utilities/api/api";

// MUI Components

// Custom Hooks

// Core Components

// Feature Components

// Icon Components

// Custom Utilities

// Custom Types
export type SendCodeFormProps = z.infer<typeof phoneSchema>;

interface SendCodeProps {
  onSubmit: SubmitHandler<SendCodeFormProps>;
}
const SendCode = (props: SendCodeProps) => {
  const { onSubmit } = props;

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendCodeFormProps>({
    resolver: zodResolver(phoneSchema),
    mode: "onChange",
  });

  const navigate = useNavigate();

  const theme = useAppTheme();
  // States

  // Handlers

  // Helpers

  // Render
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%", maxWidth: 400 }}
    >
      <Typography sx={{ direction: "ltr", fontSize: "0.75rem", mb: 2 }}>
        لطفا شماره موبایل خود را وارد نمایید.
      </Typography>

      <FormField
        name="phoneNumber"
        type="text"
        placeholder="*********09"
        register={register}
        error={(errors as FieldErrors<SendCodeFormProps>).phoneNumber}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "50%",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.white,
          }}
        >
          ادامه
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
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

export default SendCode;
