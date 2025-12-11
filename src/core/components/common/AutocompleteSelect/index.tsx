import Autocomplete from "@schoolify/core/components/base/inputs/Autocomplete";
import TextField from "@schoolify/core/components/base/inputs/TextField";
import Grid from "@schoolify/core/components/base/inputs/Grid";

interface OptionType {
  key: string | number | boolean;
  value: string;
}

interface AutocompleteSelectProps {
  label: string;
  placeholder?: string;
  options: OptionType[];
  value?: string | number;
  onChange: (value: string) => void;
  size?: "small" | "medium";
  xs?: number;
  sm?: number;
  disabled?: boolean;
  loading?: boolean;
  onInputChange?: (val: string) => void;
  inputValue?: string;
}

const AutocompleteSelect = (props: AutocompleteSelectProps) => {
  const {
    label,
    placeholder = "",
    options,
    value,
    onChange,
    onInputChange,
    inputValue,
    size = "small",
    xs = 12,
    sm = 6,
    disabled = false,
    loading = false,
  } = props;

  const selectedOption = options.find((opt) => opt.key === value) || null;

  return (
    <Grid size={{ xs, sm }}>
      <Autocomplete
        disabled={disabled}
        size={size}
        options={options}
        loading={loading}
        getOptionLabel={(option) => option.value}
        value={selectedOption}
        {...(inputValue !== undefined ? { inputValue } : {})}
        onInputChange={(_, val) => onInputChange?.(val)}
        onChange={(_, newValue) =>
          onChange(newValue ? String(newValue.key) : "")
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            slotProps={{
              inputLabel: { shrink: true },
            }}
          />
        )}
        slotProps={{
          listbox: {
            sx: { fontSize: "0.75rem" },
          },
        }}
      />
    </Grid>
  );
};

export default AutocompleteSelect;
