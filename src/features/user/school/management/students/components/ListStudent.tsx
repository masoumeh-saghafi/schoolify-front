import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import { useParams } from 'react-router-dom'
import useListStudents from '../hooks/useListStudents'
import { changeStudentInfo, deleteStudent } from '../utilities/api/api'
import { listStudentData } from '../utilities/listStudentData'

interface ListStudentProps {
  onAddRow?: (id: string, row: any) => void
  addRowTitle?: string
  addRowColor?:
    | 'error'
    | 'success'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'warning'

  isSelector?: boolean

  educationYearId?: string
  classId?: string
  ignoreFetchData?: boolean
  fetchNumber?: number
}

const ListStudent = ({
  onAddRow,
  addRowTitle,
  addRowColor,
  isSelector = false,
  educationYearId = '',
  classId = '',
  ignoreFetchData = false
}: ListStudentProps) => {
  const { schoolId = '' } = useParams()

  const {
    filters,
    paginationData,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading, refetch } = useListStudents(
    schoolId,
    paginationData,
    { ...filters, educationYearId: educationYearId, classRoomId: classId },
    ignoreFetchData
  )
const columns=listStudentData
  const handleChangeStudentInfo = async (id: string, updatedFields: any) => {
    try {
      await changeStudentInfo(updatedFields, id)
    } catch (error) {
      alert('مشکلی در دریافت اطلاعات وجود دارد')
    }
  }

  const handleDelete = async (id: string, row: any) => {
    try {
      await deleteStudent(id)
      await refetch()
    } catch (error: any) {
      alert('مشکلی در حذف دانش‌آموز وجود دارد')
    }
  }

  return (
    <ContentBox label='لیست دانش آموزان'>
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        onUpdateRow={handleChangeStudentInfo}
        onDeleteRow={handleDelete}
        onDeleteRowGetTitle={row =>
          `${row.data.firstName} ${row.data.lastName}`
        }
        onAddRow={onAddRow}
        addRowColor={addRowColor}
        addRowTitle={addRowTitle}
        disableAddRowButton={!isSelector}
        disableDeleteRowButton={isSelector}
        disableUpdateRowButton={isSelector}
      />
    </ContentBox>
  )
}
export default ListStudent
