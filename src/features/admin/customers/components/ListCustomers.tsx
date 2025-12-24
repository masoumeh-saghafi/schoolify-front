// React Type
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";

// Custom Hooks
import useListCustomer from "@schoolify/features/admin/customers/hooks/useListCustomer";
import useGetImpersonateToken from "@schoolify/features/admin/customers/hooks/useGetImpersonateToken";

// Custom Utilities
import routes from "@schoolify/core/utilities/routes";
import { setImpersonateTokenCookie } from "@schoolify/core/utilities/impersonate";
import { listCustomerColumns } from "@schoolify/features/admin/customers/utilities/listCustomerColumns";



// Custom Types
// interface ListStudentProps {}

const ListCustomer = () => {
  // Props
  // const {} = props;

  // Hooks
  const navigate = useNavigate();

  const { mutateAsync: getImpersonateToken } = useGetImpersonateToken();

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListCustomer({
    pagination,
    filters,
  });
  const queryClient = useQueryClient();

  // Helpers
  const columns = listCustomerColumns;

// Handlers
  const handleGetImpersonateToken = async (id: string, updatedFields: any) => {
    try {
      const impersonateData = await getImpersonateToken({
        data: updatedFields,
        userId: id,
      });
      setImpersonateTokenCookie(
        impersonateData.data?.impersonateToken,
        impersonateData.data?.expireDate
      );

      queryClient.resetQueries();

      navigate(routes.profile.baseUrl);
    } catch (error) {
      // console.log(error);
    }
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
        disableUpdateRowButton={true}
        disableDeleteRowButton={true}
        disableAddRowButton={false}
        addRowTitle="ورود به داشبورد"
        onAddRow={handleGetImpersonateToken}
      />
    </ContentBox>
  );
};
export default ListCustomer;
