import Table from "@schoolify/core/components/base/inputs/Table";
import TableBody from "@schoolify/core/components/base/inputs/TableBody";
import TableCell from "@schoolify/core/components/base/inputs/TableCell";
import TableContainer from "@schoolify/core/components/base/inputs/TableContainer";
import TableHead from "@schoolify/core/components/base/inputs/TableHead";
import TableRow from "@schoolify/core/components/base/inputs/TableRow";
import Paper from "@schoolify/core/components/base/inputs/Paper";

import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

interface Column {
  id: string;
  label: string;
  align?: "left" | "center" | "right";
  width?: number | string;
}

interface DataTableProps {
  columns: Column[];
  rows: any[];
  renderCell?: (row: any, column: Column) => React.ReactNode;
  sx?: object;
}

const DataTable = (props: DataTableProps) => {
  const { columns, rows, renderCell, sx } = props;
  const theme = useAppTheme();
  return (
    <TableContainer
      sx={{
        borderColor: theme?.palette?.grey?.[100],
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: theme.palette.primary.light,
        ...sx,
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ color: theme.palette.text.black }}>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                align={col.align || "left"}
                sx={{ fontWeight: 600 }}
                width={col.width}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={row.id || rowIndex}
              sx={{
                color: theme.palette.text.black,
                backgroundColor: theme.palette.background.paper,
              }}
            >
              {columns.map((col) => (
                <TableCell key={col.id} align={col.align || "left"}>
                  {renderCell ? renderCell(row, col) : row[col.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
