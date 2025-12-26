import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import TextField from "@schoolify/core/components/base/inputs/TextField";
import InputAdornment from "@schoolify/core/components/base/inputs/InputAdornment";
import FormHelperText from "@schoolify/core/components/base/inputs/FormHelperText";

// Core Components
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Feature Components
import { phoneSchema } from "@schoolify/features/shared/authentication/validations/phoneValidation";

// React Types
import { useForm, type FieldErrors, type SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

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
      sx={{ width: "100%" }}
    >
      {/* Phone Number Field */}
      <Box sx={{ mb: 3 }}>
        <Typography
          component="label"
          sx={{
            display: "block",
            textAlign: "right",
            mb: 1,
            fontSize: "0.875rem",
            fontWeight: 500,
            color: theme.palette.text.label,
          }}
        >
          شماره موبایل
        </Typography>
        <TextField
          fullWidth
          type="text"
          placeholder="09*********"
          {...register("phoneNumber")}
          error={!!errors.phoneNumber}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
              "& fieldset": {
                borderColor: theme.palette.grey[300],
              },
              "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
              },
            },
            "& .MuiInputBase-input": {
              textAlign: "right",
              direction: "ltr",
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <Phone size={20} color={theme.palette.grey[200]} />
                </InputAdornment>
              ),
            },
          }}
        />
        {errors.phoneNumber && (
          <FormHelperText error sx={{ textAlign: "right", mt: 0.5 }}>
            {errors.phoneNumber.message}
          </FormHelperText>
        )}
      </Box>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          py: 1.5,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.white,
          fontWeight: "bold",
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: theme.palette.brand.main,
          },
        }}
      >
        ارسال کد تایید
        <ArrowLeft size={18} />
      </Button>

      {/* Register Link */}
      <Box
        sx={{
          mt: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: theme.palette.text.primary }}
        >
          هنوز حساب کاربری ندارید؟{" "}
          <Box
            component={Link}
            to="/"
            sx={{
              color: theme.palette.primary.main,
              textDecoration: "none",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            ثبت‌نام کنید
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default SendCode;
