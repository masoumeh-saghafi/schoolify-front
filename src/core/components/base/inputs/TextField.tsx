// components/TextField/index.ts
import TextField from '@mui/material/TextField'
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

export type TextFieldProps = MuiTextFieldProps

export default TextField as typeof import('@mui/material/TextField').default
