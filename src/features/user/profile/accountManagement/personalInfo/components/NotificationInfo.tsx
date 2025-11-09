// Core Components
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";

// Custom Hooks
import useListUserNotifications from "@schoolify/features/user/profile/accountManagement/personalInfo/hooks/useListUserNotification";

// Custom Utilities
import { NotificationData } from "@schoolify/features/user/profile/accountManagement/personalInfo/utilities/notificationsData";




// Custom Types
// interface UserNotificationsGridProps {}

const NotificationInfo = () => {
  // Props
  // const {} = props;

  
  // Hooks
  const {
    filters,
    paginationData,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListUserNotifications(paginationData, filters);


  // Render
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
