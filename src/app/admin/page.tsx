// MUI Components
import routes from "@schoolify/core/utilities/routes";

// React Type
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AdminDashboardPage = () => {

  const navigate = useNavigate();
  useEffect(() => {
    navigate(routes.admin.tickets.index());
  }, []);
  
  // Render
  return <>{/* <AdminTicketPage /> */}</>;
};

export default AdminDashboardPage;
