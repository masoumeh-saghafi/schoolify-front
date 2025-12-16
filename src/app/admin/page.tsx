// MUI Components

import routes from "@schoolify/core/utilities/routes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import AdminTicketPage from "./tickets/page";

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(routes.admin.tickets.index());
  }, []);
  // Render
  return <>{/* <AdminTicketPage /> */}</>;
};

export default AdminDashboardPage;
