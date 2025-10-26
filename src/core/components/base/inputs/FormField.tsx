
import React from "react";
import type { FieldError } from "react-hook-form";

import Box from '@schoolify/core/components/base/inputs/Box'
import TextField from '@schoolify/core/components/base/inputs/TextField'
import FormHelperText from '@schoolify/core/components/base/inputs/FormHelperText'
import InputAdornment from '@schoolify/core/components/base/inputs/InputAdornment'



interface FormFieldProps {
  name: string;
  label?: string;
  type: string;
  register?: any;
  error?: FieldError;
  placeholder?: string;
  endAdornment?: React.ReactNode;
  defaultValue?: string | number;
  readOnly?: boolean;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const FormField = (props: FormFieldProps) => {
  const {
    name,
    label,
    type,
    register,
    error,
    placeholder,
    endAdornment,
    defaultValue,
    readOnly = false,
    value,
    onChange,
  } = props;

  return (
    <Box sx={{ mb: 4 }}>
      <TextField
        dir="rtl"
        size="small"
        fullWidth
        type={type}
        placeholder={readOnly ? undefined : placeholder}
        {...register(name)}
        error={!!error}
        label={label}
        value={value}
        // onChange={onChange && onChange}
        defaultValue={defaultValue}
        slotProps={{
          input: {
            readOnly,
            inputMode: type === "text" ? "numeric" : undefined,
            endAdornment: endAdornment ? (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ) : undefined,
          },
          inputLabel: {
            shrink: true,
          },
        }}
      />

      {error && (
        <FormHelperText
          sx={{
            fontSize: "0.60rem",
          }}
          error
        >
          {error.message}
        </FormHelperText>
      )}
    </Box>
  );
};

export default FormField;
