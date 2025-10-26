import Dashboard from "@schoolify/features/shared/dashboard/components";
import { Outlet } from "react-router-dom";

// Feature Components
// import ProfileHeader from "@schoolify/features/user/Profile/header";

const ProfileLayout = () => {
  // Render
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
};

export default ProfileLayout;
