//    import Autocomplete from "@mui/material/Autocomplete";
// import type { AutocompleteProps as MuiAutocompleteProps } from "@mui/material/Autocomplete";

// export interface AutocompleteProps extends MuiAutocompleteProps {}

// export default Autocomplete as typeof import("@mui/material/Autocomplete").default;



import Autocomplete from '@mui/material/Autocomplete'
import type { AutocompleteProps as MuiAutocompleteProps } from '@mui/material/Autocomplete'

export type AutocompleteProps<
  T = any,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false
> = MuiAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>

export default Autocomplete
