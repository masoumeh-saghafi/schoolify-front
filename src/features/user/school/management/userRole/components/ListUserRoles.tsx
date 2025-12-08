// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";

// Feature Components

// Custom Hooks

// React Type
import { useParams } from "react-router-dom";

import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import type ListUserRolesEntity from "../types/api/ListUserRolesEntity";
import useListUserRoles from "../hooks/useListUserRoles";
import useUpdateUserRole from "../hooks/useUpdateUserRole";
import useDeleteUserRole from "../hooks/useDeleteUserRole";
import { listUserRolesColumns } from "../utilities/listUserRolesColumns";
import UpdateUserRole from "./UpdateUserRole";

// Custom Types
// interface ListStudentProps {}

const ListUserRoles = () => {
  // Props
  // const {} = props;

  // Hooks
  const { schoolId = "" } = useParams();

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListUserRoles({
    schoolId,
    pagination,
    filters,
  });

  const { mutateAsync: updateUserRoles } = useUpdateUserRole();
  const { mutateAsync: deleteUserRoles } = useDeleteUserRole();

  // Helpers
  const columns = listUserRolesColumns;

  // Handlers
  const handleUpdateUserRoles = async (id: string, updatedFields: any) => {
    await updateUserRoles({
      data: updatedFields,
      phoneNumber: id,
      schoolId: schoolId,
    });
  };

  const handleDeleteUserRoles = async (id: string, row: any) => {
    await deleteUserRoles({
      phoneNumber: id,
      schoolId: schoolId,
    });
  };

  // Render
  return (
    <ContentBox label="لیست دسترسی ها">
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateUserRoles}
        onUpdateForm={UpdateUserRole}
        onDeleteRow={handleDeleteUserRoles}
        onDeleteRowGetTitle={(row: BaseIdDataEntity<ListUserRolesEntity>) =>
          `${row.data?.user.fullName}`
        }
      />
    </ContentBox>
  );
};
export default ListUserRoles;
