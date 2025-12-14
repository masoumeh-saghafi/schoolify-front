// React Type
import { useParams } from 'react-router-dom'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

// Custom Hooks
import useListUserRoles from '@schoolify/features/user/school/management/userRole/hooks/useListUserRoles'
import useUpdateUserRole from '@schoolify/features/user/school/management/userRole/hooks/useUpdateUserRole'
import useDeleteUserRole from '@schoolify/features/user/school/management/userRole/hooks/useDeleteUserRole'

// Feature Components
import UpdateUserRole from '@schoolify/features/user/school/management/userRole/components/UpdateUserRole'

// Custom Utilities
import { listUserRolesColumns } from '@schoolify/features/user/school/management/userRole/utilities/listUserRolesColumns'

// Custom Types
import type ListUserRolesEntity from '@schoolify/features/user/school/management/userRole/types/api/ListUserRolesEntity'

// Custom Types
// interface ListStudentProps {}

const ListUserRoles = () => {
  // Props
  // const {} = props;

  // Hooks
  const { schoolId = '' } = useParams()
  const { mutateAsync: updateUserRoles } = useUpdateUserRole()
  const { mutateAsync: deleteUserRoles } = useDeleteUserRole()

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListUserRoles({
    schoolId,
    pagination,
    filters
  })

  // Helpers
  const columns = listUserRolesColumns

  // Handlers
  const handleUpdateUserRoles = async (id: string, updatedFields: any) => {
    await updateUserRoles({
      data: updatedFields,
      phoneNumber: id,
      schoolId: schoolId
    })
  }

  const handleDeleteUserRoles = async (id: string, row: any) => {
    await deleteUserRoles({
      phoneNumber: id,
      schoolId: schoolId
    })
  }

  // Render
  return (
    <ContentBox label='لیست دسترسی ها'>
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
  )
}
export default ListUserRoles
