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
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import useListSummaryEducationYear from '@schoolify/features/user/school/management/shared/hooks/useListSummaryEducationYears'
import useListCost from '@schoolify/features/user/school/management/cost/hooks/useListCost'
import useUpdateCost from '@schoolify/features/user/school/management/cost/hooks/useUpdateCost'
import useDeleteCost from '@schoolify/features/user/school/management/cost/hooks/useDeleteCost'
import useMapToOptions from '@schoolify/core/hooks/common/useMapToOptions'

// Custom Utilities
import { listCostColumns } from '@schoolify/features/user/school/management/cost/utilities/listCostColumns'
import UpdateCost from '@schoolify/features/user/school/management/cost/components/UpdateCost'

// Custom Types
// interface ListStudentProps {}

const ListCost = () => {
  // Props
  // const {} = props;

  // States
  const [educationYearId, setEducationYearId] = useState('')

  // Hooks
  const { schoolId = '' } = useParams()
  const { data: educationYearData } = useListSummaryEducationYear(schoolId)
  const educationYearOptions = useMapToOptions(educationYearData)
  const { mutateAsync: updateCost } = useUpdateCost()
  const { mutateAsync: deleteCost } = useDeleteCost()

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListCost({
    educationYearId,
    pagination,
    filters
  })

  // Helpers
  const columns = listCostColumns

  // Handlers
  const handleUpdateCost = async (id: string, updatedFields: any) => {
    await updateCost({
      data: updatedFields,
      educationYearId: educationYearId,
      costId: id
    })
  }

  const handleDeleteCost = async (id: string, row: any) => {
    await deleteCost({
      costId: id,
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
          options={educationYearOptions}
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
        onUpdateRow={handleUpdateCost}
        onUpdateForm={UpdateCost}
        onDeleteRow={handleDeleteCost}
        onDeleteRowGetTitle={row =>
          `${row.data.costType.data.title} - ${row.data.referenceTitle}`
        }
      />
    </ContentBox>
  )
}
export default ListCost
