// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";

// Custom Hooks
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Core Components
import routes from "@schoolify/core/utilities/routes";

// Feature Components
import SendCode, {
  type SendCodeFormProps,
} from "@schoolify/features/shared/authentication/components/login/SendCode";
import VerifyCode, {
  type VerifyCodeFormProps,
} from "@schoolify/features/shared/authentication/components/login/VerifyCode";
import AuthLayout from "@schoolify/features/shared/authentication/components/login/AuthLayout";

// Custom Utilities
import {
  sendCode,
  verifyCode,
} from "@schoolify/features/shared/authentication/utilities/api/api";
import { getUserProfile } from "@schoolify/features/shared/profile/utilities/api/api";
import { useQueryClient } from "@tanstack/react-query";

// Custom Types
interface LoginProps {}

const Login = (props: LoginProps) => {
  // States
  const [step, setStep] = useState<"sendCode" | "verifyCode">("sendCode");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countdown, setCountdown] = useState(120);

  // Hooks
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleAutoNavigation = async () => {
    const profile = await getUserProfile();
    if (profile?.isSuccess && profile?.data) {
      if (profile.data.data?.role === "user") {
        navigate(routes.profile.baseUrl);
      } else {
        navigate(routes.profile.baseUrl);
      }
    }
  };

  useEffect(() => {
    handleAutoNavigation();
  }, []);

  useEffect(() => {
    if (step === "verifyCode" && countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, step]);

  // Handlers

  const handleSendCode = async (data: SendCodeFormProps) => {
    const response = await sendCode(data.phoneNumber);
    if (response.isSuccess) {
      // then
      setPhoneNumber(data.phoneNumber);
      setStep("verifyCode");
      setCountdown(120);
    } else {
      // catch
    }
  };

  const handleVerifyCode = async (data: VerifyCodeFormProps) => {
    const response = await verifyCode(phoneNumber, data.code);
    if (response.isSuccess) {
      // then

      queryClient.resetQueries();

      navigate(routes.profile.baseUrl);
    } else {
      // catch
    }
  };

  // Helpers

  // Render
  return (
    <Box
      sx={
        {
          // direction: "rtl"
        }
      }
    >
      <AuthLayout>
        {step === "sendCode" ? (
          <SendCode onSubmit={handleSendCode} />
        ) : (
          <VerifyCode
            onSubmit={handleVerifyCode}
            countdown={countdown}
            onBack={() => setStep("sendCode")}
          />
        )}
      </AuthLayout>
    </Box>
  );
};

export default Login;
