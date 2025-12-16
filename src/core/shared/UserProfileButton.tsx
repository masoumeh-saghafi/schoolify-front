// MUI Components
import type { SxProps, Theme } from "@mui/material";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import IconButton from "@schoolify/core/components/base/inputs/IconButton";

// Icon Components
import { AccountIcon } from "@schoolify/core/components/icon/AccountIcon";
import useUserProfile from "../../features/user/profile/accountManagement/personalInfo/hooks/useUserProfile";
import { useImpersonationStore } from "../store";
import { AdminPanelIcon } from "../components/icon/AdminPanelIcon";
// import { AdminPanelIcon } from '@schoolify/core/components/icon/AdminPanelIcon'

// Custom Types
interface UserProfileButtonProps {
  sx?: SxProps<Theme>;
  onClick?: () => void;
  type?: "admin" | "normal";
}

const UserProfileButton = (props: UserProfileButtonProps) => {
  // Props
  const { sx, onClick, type } = props;

  // Hooks

  const { data } = useUserProfile();
  const impersonationStore = useImpersonationStore();

  // Handlers

  // Render
  return (
    <IconButton
      size="large"
      disableRipple
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        color: (theme) => theme.palette.text.primary,
        ...sx,
      }}
    >
      {impersonationStore.isImpersonating ? (
        <AdminPanelIcon />
      ) : (
        <AccountIcon />
      )}

      <Typography
        variant="body2"
        sx={{
          color: (theme) => theme.palette.text.primary,
          fontWeight: 500,
        }}
      >
        {data?.data?.fullName ?? "کاربر اسکولیفای "}
      </Typography>
    </IconButton>
  );
};

export default UserProfileButton;
