// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";

// Feature Components

// Custom Hooks

// React Type
import { useParams } from "react-router-dom";
import useUpdateEducationYear from "@schoolify/features/user/school/management/educationYear/hooks/useUpdateEducationYear";
import useDeleteEducationYear from "@schoolify/features/user/school/management/educationYear/hooks/useDeleteEducationYear";
import useListEducationYear from "../hooks/useListEducationYear";
import { listEucationYearData } from "../utilities/listEucationYearData";
import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";
import type ListEucationYearEntity from "../types/api/ListEucationYearEntity";

// Custom Types
// interface ListStudentProps {}

const ListEucationYear = () => {
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

  const { data, isLoading } = useListEducationYear({
    schoolId,
    pagination,
    filters,
  });

  const { mutateAsync: updateEducationYear } = useUpdateEducationYear();
  const { mutateAsync: deleteEducationYear } = useDeleteEducationYear();

  // Helpers
  const columns = listEucationYearData;

  // Handlers
  const handleUpdateEducationYear = async (id: string, updatedFields: any) => {
    await updateEducationYear({
      data: updatedFields,
      educationYearId: id,
      schoolId: schoolId,
    });
  };

  const handleDeleteEducationYear = async (id: string, row: any) => {
    await deleteEducationYear({
      educationYearId: id,
      schoolId: schoolId,
    });
  };

  // Render
  return (
    <ContentBox label="لیست سال های تحصیلی ">
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateEducationYear}
        onDeleteRow={handleDeleteEducationYear}
        onDeleteRowGetTitle={(row: BaseIdDataEntity<ListEucationYearEntity>) =>
          `${row.data?.title}`
        }
      />
    </ContentBox>
  );
};
export default ListEucationYear;
