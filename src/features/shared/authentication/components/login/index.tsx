import { useNavigate } from "react-router-dom";
import { sendCode, verifyCode } from "../../utilities/api/api";
import { useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import SendCode, { type SendCodeFormProps } from "./SendCode";
import VerifyCode, { type VerifyCodeFormProps } from "./VerifyCode";
import routes from "@schoolify/core/utilities/routes";

// MUI Components

// Custom Hooks

// Core Components

// Feature Components

// Icon Components

// Custom Utilities

// Custom Types
interface LoginProps {}
const Login = (props: LoginProps) => {
  // States
  const [step, setStep] = useState<"sendCode" | "verifyCode">("sendCode");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countdown, setCountdown] = useState(120);

  // Hooks
  const navigate = useNavigate();

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
      navigate(routes.index);
    } else {
      // catch
    }
  };

  // Helpers

  // Render
  return (
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
  );
};

export default Login;
