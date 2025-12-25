// React Types
import { useRef, useEffect, useState, KeyboardEvent, ClipboardEvent } from "react";

// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// Custom Types
interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

const OtpInput = (props: OtpInputProps) => {
  // Props
  const { length = 6, value, onChange, error = false } = props;

  // Hooks
  const theme = useAppTheme();

  // Refs
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // States
  const [otp, setOtp] = useState<string[]>(
    value ? value.split("").slice(0, length) : Array(length).fill("")
  );

  // Effects
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (value) {
      setOtp(value.split("").slice(0, length));
    } else {
      setOtp(Array(length).fill(""));
    }
  }, [value, length]);

  // Handlers
  const handleChange = (index: number, digit: string) => {
    if (!/^\d*$/.test(digit)) return;

    const newOtp = [...otp];
    newOtp[index] = digit.slice(-1);
    setOtp(newOtp);
    onChange(newOtp.join(""));

    // Move to next input
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (pastedData) {
      const newOtp = pastedData.split("").concat(Array(length - pastedData.length).fill(""));
      setOtp(newOtp);
      onChange(newOtp.join(""));
      inputRefs.current[Math.min(pastedData.length, length - 1)]?.focus();
    }
  };

  // Render
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        justifyContent: "center",
        direction: "ltr",
      }}
    >
      {Array.from({ length }).map((_, index) => (
        <Box
          key={index}
          component="input"
          ref={(el: HTMLInputElement | null) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[index] || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(index, e.target.value)
          }
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          sx={{
            width: 48,
            height: 56,
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            border: `2px solid ${
              error ? theme.palette.error.main : theme.palette.grey[300]
            }`,
            borderRadius: 2,
            outline: "none",
            transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            "&:focus": {
              borderColor: error
                ? theme.palette.error.main
                : theme.palette.primary.main,
              boxShadow: `0 0 0 3px ${
                error
                  ? `${theme.palette.error.main}30`
                  : `${theme.palette.primary.main}30`
              }`,
            },
            "&:hover": {
              borderColor: error
                ? theme.palette.error.main
                : theme.palette.primary.main,
            },
          }}
        />
      ))}
    </Box>
  );
};

export default OtpInput;
