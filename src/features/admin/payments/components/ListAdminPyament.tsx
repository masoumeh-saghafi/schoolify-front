// React Type

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";

// Custom Hooks

// Feature Components

// Custom Utilities

// Custom Types
import useListAdminPayment from "../hooks/useListAdminPayment";
import { listAdminPymentColumns } from "../utilities/listAdminPymentColumns";

// Custom Types
// interface ListStudentProps {}

const ListAdminPyament = () => {
  // Props
  // const {} = props;

  // Hooks

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListAdminPayment({
    pagination,
    filters,
  });

  // Helpers
  const columns = listAdminPymentColumns;

  // Render
  return (
    <ContentBox label="لیست پرداخت ها">
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        disableAddRowButton={true}
        disableDeleteRowButton={true}
        disableUpdateRowButton={true}
      />
    </ContentBox>
  );
};
export default ListAdminPyament;
