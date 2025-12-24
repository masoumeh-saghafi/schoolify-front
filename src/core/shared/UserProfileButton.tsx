// MUI Types
import type { SxProps, Theme } from '@mui/material'

// MUI Components
import Typography from '@schoolify/core/components/base/inputs/Typography'
import IconButton from '@schoolify/core/components/base/inputs/IconButton'

// Icon Components
import { AccountIcon } from '@schoolify/core/components/icon/AccountIcon'
import { AdminPanelIcon } from '@schoolify/core/components/icon/AdminPanelIcon'

// Feature Components
import useUserProfile from '@schoolify/features/shared/profile/hooks/useUserProfile'

// component store
import { useImpersonationStore } from '@schoolify/core/store/impersonation.store'

// Custom Types
interface UserProfileButtonProps {
  sx?: SxProps<Theme>
  onClick?: () => void
  type?: 'admin' | 'normal'
}

const UserProfileButton = (props: UserProfileButtonProps) => {
  // Props
  const { sx, onClick, type } = props

  // Hooks

  const { data } = useUserProfile()
  const impersonationStore = useImpersonationStore()

  // Handlers

  // Render
  return (
    <IconButton
      size='large'
      disableRipple
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: theme => theme.palette.text.primary,
        ...sx
      }}
    >
      {impersonationStore.isImpersonating ? (
        <AdminPanelIcon width={30} height={30} />
      ) : (
        <AccountIcon width={30} height={30} />
      )}

      <Typography
        variant='body2'
        sx={{
          color: theme => theme.palette.text.primary,
          fontWeight: 500,
          ml: '10px'
        }}
      >
        {data?.data?.fullName ?? 'کاربر اسکولیفای '}
      </Typography>
    </IconButton>
  )
}

export default UserProfileButton
