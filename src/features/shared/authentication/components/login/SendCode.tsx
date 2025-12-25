import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";
import Typography from "@schoolify/core/components/base/inputs/Typography";

// Core Components
import FormField from "@schoolify/core/components/base/inputs/FormField";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Feature Components
import { phoneSchema } from "@schoolify/features/shared/authentication/validations/phoneValidation";

// React Types
import { useForm, type FieldErrors, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Icons
import { Phone, ArrowLeft } from "lucide-react";

// Custom Types
export type SendCodeFormProps = z.infer<typeof phoneSchema>;

interface SendCodeProps {
  onSubmit: SubmitHandler<SendCodeFormProps>;
}

const SendCode = (props: SendCodeProps) => {
  // Props
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

  // Render
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%", maxWidth: 400 }}
    >
      {/* Icon */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.light,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Phone size={32} color={theme.palette.brand.main} />
        </Box>
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          fontSize: "0.9rem",
          mb: 3,
          color: theme.palette.text.primary,
        }}
      >
        لطفا شماره موبایل خود را وارد نمایید.
      </Typography>

      <FormField
        name="phoneNumber"
        type="text"
        placeholder="*********09"
        register={register}
        error={(errors as FieldErrors<SendCodeFormProps>).phoneNumber}
      />

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3, gap: 2 }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            flex: 1,
            py: 1.5,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.white,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          ارسال کد تایید
          <ArrowLeft size={18} />
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
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

export default SendCode;
