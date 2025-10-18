import { z } from "zod";
import { phoneSchema } from "@schoolify/features/shared/authentiation/validations/phoneValidation";
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
type form = z.infer<typeof phoneSchema>;

interface SendCodeFormProps {
  onSubmit: SubmitHandler<form>;
}
const SendCodeForm = (props: SendCodeFormProps) => {
  const { onSubmit } = props;

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<form>({
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
      onSubmit={
        // handleSubmit(onSubmit)
        async () => {
          const res = await sendCode("0911587522");
          if (res.isSuccess) {
            // then
          } else {
            // catch
          }
        }
      }
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
        error={(errors as FieldErrors<form>).phoneNumber}
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

export default SendCodeForm;
