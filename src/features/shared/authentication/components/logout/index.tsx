// MUI Components

// Custom Hooks
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Core Components
import routes from "@schoolify/core/utilities/routes";

// Feature Components

// Custom Utilities
import { logout } from "../../utilities/auth";

// Custom Types
interface LogoutProps {}

const Logout = (props: LogoutProps) => {
  // Hooks
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    navigate(routes.index);
  };

  useEffect(() => {
    handleLogout();
  }, []);

  // Handlers

  // Helpers

  // Render
  return <></>;
};

export default Logout;
