// React Type
import { useState, useEffect } from "react";
import {
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldValues,
} from "react-hook-form";

// MUI Components
import TextField from "@schoolify/core/components/base/inputs/TextField";

// Custom Types
interface ControlledPriceFieldRendererProps {
  field: ControllerRenderProps<FieldValues, string>;
  fieldState: ControllerFieldState;
  label?: string;
  placeholder?: string;
}

// format price
const formatPrice = (value: string | number) => {
  if (!value) return "";
  const num = Number(String(value).replace(/,/g, ""));
  return isNaN(num) ? "" : num.toLocaleString("en-US");
};

// parse price
const parsePrice = (value: string) => {
  const cleaned = value.replace(/,/g, "");
  const num = Number(cleaned);
  return isNaN(num) ? undefined : num;
};

const ControlledPriceFieldRenderer = (
  props: ControlledPriceFieldRendererProps
) => {
  // Props
  const { field, fieldState, label, placeholder } = props;

  // States
  const [displayValue, setDisplayValue] = useState("");

  // Render

  // sync RHF value → formatted UI value
  useEffect(() => {
    if (field.value !== parsePrice(displayValue)) {
      setDisplayValue(formatPrice(field.value));
    }
  }, [field.value]);

  return (
    <TextField
      label={label}
      value={displayValue}
      fullWidth
      size="small"
      placeholder={placeholder}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
      onChange={(e) => {
        const raw = e.target.value;
        const parsed = parsePrice(raw);

        // update UI field
        setDisplayValue(formatPrice(raw));

        // push real numeric value to RHF
        field.onChange(parsed);
      }}
      slotProps={{
        htmlInput: {
          inputMode: "numeric",
          pattern: "[0-9,]*",
        },
        inputLabel: {
          shrink: true,
        },
      }}
    />
  );
};

export default ControlledPriceFieldRenderer;
