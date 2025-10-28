// MUI Components
import ProfileDashboard from "@schoolify/features/user/profile/dashboard/components/dashboard";

// Feature Components

// React Types
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  // Render
  return (
    <>
      <ProfileDashboard>
        <Outlet />
      </ProfileDashboard>
    </>
  );
};

export default ProfileLayout;
