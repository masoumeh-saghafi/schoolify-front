// React Type
import { useMemo } from 'react'

export interface OptionType {
  key: string | boolean
  value: string
}

type NullableData<T> = T[] | null | undefined
// Custom Types
interface BaseEntityWithNullableData {
  id: string | number
  data: {
    title?: string
    firstName?: string
    lastName?: string
    identityCode?: string
  } | null
}

const useMapToOptions = <T extends BaseEntityWithNullableData>(
  data: NullableData<T>
): OptionType[] => {
  
  // Render
  return useMemo(() => {
    return (data ?? []).map(item => ({
      key: String(item.id),
      value:
        item.data?.title ??
        (item.data?.firstName
          ? `${item.data.identityCode} - ${item.data.firstName} ${item.data.lastName}`
          : '')
    }))
  }, [data])
}

export default useMapToOptions
