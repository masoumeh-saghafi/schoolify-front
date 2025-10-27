import Box from "@schoolify/core/components/base/inputs/Box";
import Dashboard from "@schoolify/features/shared/dashboard/components";
import ProfileDashboard from "@schoolify/features/user/profile/components/dashboard";
import { Outlet } from "react-router-dom";

// Feature Components
// import ProfileHeader from "@schoolify/features/user/Profile/header";

const ProfileLayout = () => {
  // Render
  return (
    <>
      <ProfileDashboard>
        <Box>ProfileDashboard</Box>
        <Outlet />
      </ProfileDashboard>
    </>
  );
};

export default ProfileLayout;
