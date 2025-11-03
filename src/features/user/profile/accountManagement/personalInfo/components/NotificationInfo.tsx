import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import useListUserNotifications from "../hooks/useListUserNotification";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import { NotificationData } from "../utilities/notificationsData";

interface UserNotificationsGridProps {}

const NotificationInfo = (props: UserNotificationsGridProps) => {
  const {} = props;
  const {
    filters,
    paginationData,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListUserNotifications(paginationData, filters);

  return (
    <ContentBox label="اعلانات">
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        onFilterChange={handleFilterChange}
        columns={NotificationData()}
        disableAddRowButton={true}
        disableDeleteRowButton={true}
        disableUpdateRowButton={true}
      />
    </ContentBox>
  );
};
export default NotificationInfo;
