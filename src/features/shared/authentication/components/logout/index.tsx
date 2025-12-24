// React Type
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

// Core Components
import routes from "@schoolify/core/utilities/routes";

// Custom Utilities
import { logout } from "@schoolify/features/shared/authentication/utilities/auth";


// Custom Types
interface LogoutProps {}

const Logout = (props: LogoutProps) => {
  // Hooks
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  // Handlers
  const handleLogout = async () => {
    logout();

    queryClient.resetQueries();

    navigate(routes.index);
  };

  // Effect
  useEffect(() => {
    handleLogout();
  }, []);


  // Render
  return <></>;
};

export default Logout;
