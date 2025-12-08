import { Controller } from "react-hook-form";
import TextField from "@schoolify/core/components/base/inputs/TextField";
import { useState, useEffect } from "react";

interface ControlledPriceFieldProps {
  control: any;
  name: string;
  label?: string;
}

const formatPrice = (value: string | number) => {
  if (!value) return "";
  const num = Number(String(value).replace(/,/g, ""));
  return isNaN(num) ? "" : num.toLocaleString("en-US");
};

const parsePrice = (value: string) => {
  const cleaned = value.replace(/,/g, "");
  const num = Number(cleaned);
  return isNaN(num) ? undefined : num;
};

const ControlledPriceField = ({
  control,
  name,
  label,
}: ControlledPriceFieldProps) => {
  const [displayValue, setDisplayValue] = useState("");

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={0}
      render={({ field, fieldState }) => {
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
            }}
          />
        );
      }}
    />
  );
};

export default ControlledPriceField;
