// MUI Components
import AdminDashboard from "@schoolify/features/admin/dashboard/components/dashboard";

// Feature Components

// React Types
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  // Render
  return (
    <>
      <AdminDashboard>
        <Outlet />
      </AdminDashboard>
    </>
  );
};

export default AdminLayout;
