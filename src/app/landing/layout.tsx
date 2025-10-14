import { Outlet } from "react-router-dom";

// Feature Components
import LandingHeader from "@schoolify/features/user/landing/header";



const LandingLayout = () => {

  // Render
  return (
    <>
      <LandingHeader />
      <Outlet />
    </>
  );
};

export default LandingLayout;
