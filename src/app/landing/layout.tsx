// Feature Components
import Footer from "@schoolify/features/shared/layout/footer";
import Header from "@schoolify/features/shared/layout/header";

// React Type
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  // Render
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default LandingLayout;
