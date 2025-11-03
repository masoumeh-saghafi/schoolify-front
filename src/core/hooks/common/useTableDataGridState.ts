import { useState } from 'react'
import { type GridPaginationModel } from '@mui/x-data-grid'

const useTableDataGridState = () => {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const [order, setOrder] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10
  })

  const handleFilterChange = (filter: Record<string, string>) => {
    setFilters(filter)
  }

  const handlePaginationModelChange = (
    newPaginationModel: GridPaginationModel
  ) => {
    setPaginationModel(newPaginationModel)
  }

  const handleSortModelChange = (newOrder: string) => {
    setOrder(newOrder)
  }

  return {
    filters,
    order,
    paginationModel,

    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  }
}

export default useTableDataGridState
