   import Table from "@mui/material/Table";
import type { TableProps as MuiTableProps } from "@mui/material/Table";

export interface TableProps extends MuiTableProps {}

export default Table as typeof import("@mui/material/Table").default;
