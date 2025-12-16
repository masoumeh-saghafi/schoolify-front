// React Type
import { useNavigate, useParams } from 'react-router-dom'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

// Custom Hooks

// Feature Components
import UpdateUserRole from '@schoolify/features/user/school/management/userRole/components/UpdateUserRole'
import useListCustomer from '../hooks/useListCustomer'
import { listCustomerColumns } from '../utilities/listCustomerColumns'
import useGetImpersonateToken from '../hooks/useGetImpersonateToken'
import routes from '@schoolify/core/utilities/routes'

// Custom Utilities

// Custom Types

// Custom Types
// interface ListStudentProps {}

const Listcustomer = () => {
  // Props
  // const {} = props;

  // Hooks
  const navigate = useNavigate()
  // const { mutateAsync: updatecustomer } = useUpdateUserRole()
  const { mutateAsync: getImpersonateToken } = useGetImpersonateToken()

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListCustomer({
    pagination,
    filters
  })

  // Helpers
  const columns = listCustomerColumns

  // Handlers
  // const handleUpdatecustomer = async (id: string, updatedFields: any) => {
  //   await updatecustomer({
  //     data: updatedFields,
  //     phoneNumber: id,
  //     schoolId: schoolId
  //   })
  // }

  const handleGetImpersonateToken = async (id: string, updatedFields: any) => {
    try {
      await getImpersonateToken({
        data: updatedFields,
        userId: id
      });
    navigate(routes.profile.baseUrl)
    }
    catch (error) {
      // console.log(error);
      
    }
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
        disableUpdateRowButton={true}
        disableDeleteRowButton={true}
        disableAddRowButton={false}
        addRowTitle='ورود به داشبورد'
        onAddRow={handleGetImpersonateToken}
        
      />
    </ContentBox>
  )
}
export default Listcustomer
