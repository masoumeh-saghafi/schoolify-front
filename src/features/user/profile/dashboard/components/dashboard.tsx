// React Types
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Core Components
import { useImpersonationStore } from "@schoolify/core/store";

// Feature Components
import type { DashboardSidebarExitButtonDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";
import Dashboard from "@schoolify/features/shared/dashboard/components";

// Custom Utilities
import routes from "@schoolify/core/utilities/routes";
import { useDashboardSidebarData } from "@schoolify/features/user/profile/dashboard/utilities/data";
import { removeImpersonateTokenCookie } from "@schoolify/core/utilities/impersonate";

// Custom Hooks
import useUserProfile from "@schoolify/features/shared/profile/hooks/useUserProfile";
import { useQueryClient } from "@tanstack/react-query";

// Custom Types
interface ProfileDashboardProps {
  children: ReactNode;
}

const ProfileDashboard = (props: ProfileDashboardProps) => {
  // Props
  const { children } = props;

  // Hooks
  const sidebarData = useDashboardSidebarData();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useUserProfile();
  const impersonationStore = useImpersonationStore();

  // Helpers
  let exitButtonData: DashboardSidebarExitButtonDataProps;
  if (impersonationStore.isImpersonating) {
    exitButtonData = {
      title: "خروج از داشبورد مشتری",
      onClick: () => {
        removeImpersonateTokenCookie();
        queryClient.resetQueries();
        navigate(routes.admin.customers.index());
      },
    };
  } else {
    exitButtonData = {
      title: "خروج از حساب",
      onClick: () => navigate(routes.logout),
    };
  }

  // Effect
  useEffect(() => {
    if (isLoading) return;

    if (isError || !data?.id) {
      navigate(routes.login);
    }
  }, [data]);

  // Render
  return (
    <>
      <Dashboard
        sidebarData={sidebarData}
        sidebarExitButtonData={exitButtonData}
      >
        {children}
      </Dashboard>
    </>
  );
};

export default ProfileDashboard;
