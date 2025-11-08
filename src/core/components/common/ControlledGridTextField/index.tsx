import { FormHelperText } from "@mui/material";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import TextField from "@schoolify/core/components/base/inputs/TextField";
import Grid from "@schoolify/core/components/base/inputs/Grid";
interface FormGridTextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  xs?: number;
  sm?: number;
}

const ControlledGridTextField = <T extends FieldValues>({
  control,
  name,
  label,
  xs = 12,
  sm = 6,

  ...props
}: FormGridTextFieldProps<T>) => {
  return (
    <Grid size={{ xs, sm }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <TextField
              {...field}
              {...props}
              label={label}
              fullWidth
              size="small"
              error={!!fieldState.error}
              helperText={fieldState.error?.message ?? ""}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </>
        )}
      />
    </Grid>
  );
};

export default ControlledGridTextField;
