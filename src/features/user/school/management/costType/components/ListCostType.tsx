// React Type
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// MUI Components
import Grid from '@schoolify/core/components/base/inputs/Grid'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import AutocompleteSelect from '@schoolify/core/components/common/AutocompleteSelect'

// Custom Hooks
import useListCostType from '@schoolify/features/user/school/management/costType/hooks/useListCostType'
import useUpdateCostType from '@schoolify/features/user/school/management/costType/hooks/useUpdateCostType'
import useDeleteCostType from '@schoolify/features/user/school/management/costType/hooks/useDeleteCostType'
import UpdateCostType from '@schoolify/features/user/school/management/costType/components/UpdateCostType'
import useListSummaryEducationYear from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'

// Custom Utilities
import { listCostTypeColumns } from '@schoolify/features/user/school/management/costType/utilities/listCostTypeColumns'

// Custom Types
// interface ListStudentProps {}

const ListCostType = () => {
  // Props
  // const {} = props;

  // States
  const [educationYearId, setEducationYearId] = useState('')

  // Hooks
  const { schoolId = '' } = useParams()
  const { data: educationYearData } = useListSummaryEducationYear(schoolId)
  const { mutateAsync: updateCostType } = useUpdateCostType()
  const { mutateAsync: deleteCostType } = useDeleteCostType()

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListCostType({
    educationYearId,
    pagination,
    filters
  })

  // Helpers
  const columns = listCostTypeColumns

  // Handlers
  const handleUpdateCostType = async (id: string, updatedFields: any) => {
    await updateCostType({
      data: updatedFields,
      educationYearId: educationYearId,
      costTypeId: id
    })
  }

  const handleDeleteCostType = async (id: string, row: any) => {
    await deleteCostType({
      costTypeId: id,
      educationYearId: educationYearId
    })
  }

  // Render
  return (
    <ContentBox label='لیست عنوان های هزینه'>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <AutocompleteSelect
          label='سال تحصیلی'
          placeholder='لطفا یک سال را انتخاب نمایید'
          options={
            educationYearData?.map(item => ({
              key: item.id,
              value: item.data?.title ?? ''
            })) ?? []
          }
          value={educationYearId}
          onChange={setEducationYearId}
          loading={isLoading}
        />
      </Grid>

      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleUpdateCostType}
        onUpdateForm={UpdateCostType}
        onDeleteRow={handleDeleteCostType}
        onDeleteRowGetTitle={row => `${row.data.title}`}
      />
    </ContentBox>
  )
}
export default ListCostType
