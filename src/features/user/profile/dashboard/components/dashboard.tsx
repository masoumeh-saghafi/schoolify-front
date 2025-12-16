// Feature Components
import { useImpersonationStore } from "@schoolify/core/store";
import { removeImpersonateTokenCookie } from "@schoolify/core/utilities/impersonate";
import routes from "@schoolify/core/utilities/routes";
import Dashboard from "@schoolify/features/shared/dashboard/components";
import type { DashboardSidebarExitButtonDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";
import useUserProfile from "@schoolify/features/shared/profile/hooks/useUserProfile";

// Custom Utilities
import { useDashboardSidebarData } from "@schoolify/features/user/profile/dashboard/utilities/data";

// React Types
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Custom Types
interface ProfileDashboardProps {
  children: ReactNode;
}

const ProfileDashboard = (props: ProfileDashboardProps) => {
  // Props
  const { children } = props;
  const sidebarData = useDashboardSidebarData();

  const navigate = useNavigate();

  const { data, isLoading, isError } = useUserProfile();
  const impersonationStore = useImpersonationStore();

  let exitButtonData: DashboardSidebarExitButtonDataProps;
  if (impersonationStore.isImpersonating) {
    exitButtonData = {
      title: "خروج از داشبورد مشتری",
      onClick: () => {
        removeImpersonateTokenCookie();
        navigate(routes.admin.customers.index());
      },
    };
  } else {
    exitButtonData = {
      title: "خروج از حساب",
      onClick: () => navigate(routes.logout),
    };
  }

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
