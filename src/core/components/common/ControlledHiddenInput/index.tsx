import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface ControlledHiddenInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  defaultValue?: any;
}

const ControlledHiddenInput = <T extends FieldValues>({
  control,
  name,
  defaultValue,
}: ControlledHiddenInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => <input type="hidden" {...field} />}
    />
  );
};

export default ControlledHiddenInput;
