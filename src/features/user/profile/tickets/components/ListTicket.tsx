// React Type
import { useNavigate, useParams } from "react-router-dom";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import useListTicket from "../hooks/useListTicket";
import { listTicketColumns } from "../utilities/listStudentColumns";
import { tabBoxGenerateFullUrlPath } from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";

// Custom Utilities

// Feature Components

// Custom Hooks

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
      //routes.profile.tickets.index(),
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
