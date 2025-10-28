// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";

// Feature Components
import ProfileDashboard from "@schoolify/features/user/profile/components/dashboard";

// React Types
import { Outlet } from "react-router-dom";


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
