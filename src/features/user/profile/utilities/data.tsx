import { SettingIcon } from "@schoolify/core/components/icon/settingIcon";
import { SupportAgentIcon } from "@schoolify/core/components/icon/SupportAgentIcon";
import routes from "@schoolify/core/utilities/routes";
import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

export const sidebarData: DashboardSidebarDataProps[] = [
  { title: "تیکت پشتیبانی", link: routes.index, icon: <SupportAgentIcon /> },
  { title: "مدیریت حساب کاربری", link: routes.index, icon: <SettingIcon /> },
];
