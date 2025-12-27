// React Type
import { useNavigate } from "react-router-dom";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import { tabBoxGenerateFullUrlPath } from "@schoolify/core/components/common/tabBoxGenerateFullUrlPath";

// Custom Hooks
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import useListTicket from "@schoolify/features/user/profile/tickets/hooks/useListTicket";

// Custom Utilities
import { listTicketColumns } from "@schoolify/features/user/profile/tickets/utilities/listStudentColumns";

// Custom Types
interface ListTicketProps {}

const ListTicket = (props: ListTicketProps) => {
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

  const { data, isLoading } = useListTicket({
    pagination,
    filters,
  });

  const navigate = useNavigate();

  // Helpers
  const columns = listTicketColumns;

  // Handlers
  const handleOpenTicketDetails = async (id: string, row: any) => {
    const changeTabUrl = tabBoxGenerateFullUrlPath(
      location.pathname,
      `ticket?id=${id}`
    );
    navigate(changeTabUrl);
  };

  // Render
  return (
    <ContentBox label="لیست تیکت‌ها">
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        disableDeleteRowButton={true}
        disableUpdateRowButton={true}
        disableAddRowButton={false}
        addRowTitle="جزئیات"
        onAddRow={handleOpenTicketDetails}
      />
    </ContentBox>
  );
};
export default ListTicket;
