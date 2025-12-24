   import Card from "@mui/material/Card";
import type { CardProps as MuiCardProps } from "@mui/material/Card";

export interface CardProps extends MuiCardProps {}

export default Card as typeof import("@mui/material/Card").default;
