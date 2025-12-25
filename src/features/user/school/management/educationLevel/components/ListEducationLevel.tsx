// React Type
import { useState } from "react";
import { useParams } from "react-router-dom";

// MUI Components
import Grid from "@schoolify/core/components/base/inputs/Grid";

// Core Components
import ContentBox from "@schoolify/core/components/common/ContentBox";
import TableDataGrid from "@schoolify/core/components/common/TableDataGrid";
import useTableDataGridState from "@schoolify/core/hooks/common/useTableDataGridState";
import AutocompleteSelect from "@schoolify/core/components/common/AutocompleteSelect";
import type { BaseIdDataEntity } from "@schoolify/core/types/core/api/response";

// Feature Components
import UpdateEducationLevel from "@schoolify/features/user/school/management/educationLevel/components/UpdateEducationLevel";
import { listEducationLevelColumns } from "@schoolify/features/user/school/management/educationLevel/utilities/listEducationLevelColumns";

// Custom Utilities
import type ListEducationLevelEntity from "@schoolify/features/user/school/management/educationLevel/types/api/ListEducationLevelEntity";

// Custom Hooks
import useListEducationLevel from "@schoolify/features/user/school/management/educationLevel/hooks/useListEducationLevel";
import useDeleteEducationLevel from "@schoolify/features/user/school/management/educationLevel/hooks/useDeleteEducationLevel";
import useUpdateEducationLevel from "@schoolify/features/user/school/management/educationLevel/hooks/useUpdateEducationLevel";
import useListSummaryEducationYear from "@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears";
import useMapToOptions from "@schoolify/core/hooks/common/useMapToOptions";

// Custom Types
// interface ListStudentProps {}

const ListEducationLevel = () => {
  // Props
  // const {} = props;

  // States
  const [educationYearId, setEducationYearId] = useState("");

  // Hooks
  const { schoolId = "" } = useParams();
  const { data: educationYearData } = useListSummaryEducationYear(schoolId);
  const { mutateAsync: updateEducationLevel } = useUpdateEducationLevel();
  const { mutateAsync: deleteEducationLevel } = useDeleteEducationLevel();

  const educationYearOptions = useMapToOptions(educationYearData);

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
  } = useTableDataGridState();

  const { data, isLoading } = useListEducationLevel({
    educationYearId,
    pagination,
    filters,
  });

  // Helpers
  const columns = listEducationLevelColumns;

  // Handlers
  const handleUpdateEducationLevel = async (id: string, updatedFields: any) => {
    await updateEducationLevel({
      data: updatedFields,
      educationLevelId: id,
      educationYearId: educationYearId,
    });
  };

  const handleDeleteEducationLevel = async (id: string, row: any) => {
    await deleteEducationLevel({
      educationLevelId: id,
      educationYearId: educationYearId,
    });
  };

  // Render
  return (
    <ContentBox label="لیست مقطع های تحصیلی ">
      <Grid container spacing={2} mb={2}>
        <AutocompleteSelect
          label="سال تحصیلی"
          options={educationYearOptions}
          value={educationYearId}
          onChange={setEducationYearId}
          loading={isLoading}
          placeholder="لطفا یک سال را انتخاب نمایید"
        />
      </Grid>

      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateEducationLevel}
        onUpdateForm={UpdateEducationLevel}
        onDeleteRow={handleDeleteEducationLevel}
        onDeleteRowGetTitle={(row:BaseIdDataEntity<ListEducationLevelEntity>) =>
          `${row.data?.title}`
        }
      />
    </ContentBox>
  );
};
export default ListEducationLevel;
