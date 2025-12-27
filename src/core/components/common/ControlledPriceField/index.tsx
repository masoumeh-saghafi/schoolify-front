// React Type
import { Controller } from "react-hook-form";

// MUI Components
import Grid from "@schoolify/core/components/base/inputs/Grid";
import ControlledPriceFieldRenderer from "@schoolify/core/components/common/ControlledPriceField/renderer";

// Custom Types
interface ControlledPriceFieldProps {
  control: any;
  name: string;
  xs?: number;
  sm?: number;
  label?: string;
  placeholder?: string;
}

const ControlledPriceField = (props: ControlledPriceFieldProps) => {
  // Props
  const { control, name, placeholder, label, xs = 12, sm = 6 } = props;

  // Render
  return (
    <Grid size={{ xs, sm }}>
      <Controller
        name={name}
        control={control}
        defaultValue={0}
        render={({ field, fieldState }) => (
          <ControlledPriceFieldRenderer
            field={field}
            fieldState={fieldState}
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </Grid>
  );
};

export default ControlledPriceField;
