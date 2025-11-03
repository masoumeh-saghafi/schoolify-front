import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import type ListNotificationsEntity from '../types/api/ListNotificationsEntity'
import type { GridColDef } from '@mui/x-data-grid/models/colDef'
import Typography from '@schoolify/core/components/base/inputs/Typography'
import FormattedDate from '@schoolify/core/components/common/FormattedDate'
import useAppTheme from '@schoolify/core/hooks/common/useAppTheme'

export const NotificationData = (): GridColDef<
  BaseIdDataEntity<ListNotificationsEntity>
>[] => {
  const theme = useAppTheme()

  return [
    {
      field: 'title',
      resizable: false,
      headerName: 'نام مدرسه',
      width: 150,
      editable: false,
      sortable: false,
      filterable: false,
      valueGetter: (_, row) => row.data?.title
    },
    {
      field: 'createDate',
      resizable: false,
      headerName: 'تاریخ ثبت',
      width: 150,
      editable: false,
      renderCell: params => <FormattedDate date={params.row.data?.createDate} />
    },
    {
      field: 'content',
      resizable: false,
      headerName: 'متن اعلان',
      width: 450,
      editable: false,
      sortable: false,
      filterable: false,
      renderCell: (params: any) => {
        const { type, content } = params.row.data

        const getTypeColor = () => {
          switch (type) {
            case 'info':
              return theme.palette.text.black
            case 'warning':
              return theme.palette.warning.main
            case 'danger':
              return theme.palette.error.main
            default:
              return theme.palette.text.black
          }
        }

        return (
          <Typography
            sx={{
              color: getTypeColor(),
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              height: '100%'
            }}
          >
            {content}
          </Typography>
        )
      }
    }
  ]
}
