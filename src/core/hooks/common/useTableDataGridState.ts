// React Type
import { useState } from 'react'

// Core Components
import type { BaseRequestPaginationParams } from '@schoolify/core/types/core/api/request'

//Type Definitions
import { type GridPaginationModel } from '@mui/x-data-grid'

const useTableDataGridState = () => {
  // States
  const [filters, setFilters] = useState<Record<string, string>>({})
  const [order, setOrder] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10
  })

  // Handlers
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

  // Helpers
  const paginationData: BaseRequestPaginationParams = {
    page: paginationModel.page,
    size: paginationModel.pageSize,
    order: order
  }

  // Render
  return {
    filters,
    order,
    paginationModel,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange,
    paginationData
  }
}

export default useTableDataGridState
