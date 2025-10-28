import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

import { SettingIcon } from "@schoolify/core/components/icon/settingIcon";
import { SupportAgentIcon } from "@schoolify/core/components/icon/SupportAgentIcon";

import routes from "@schoolify/core/utilities/routes";

export const sidebarData: DashboardSidebarDataProps[] = [
  { title: " پشتیبانی", link: routes.index, icon: <SupportAgentIcon /> },
  { title: "مدیریت حساب کاربری", link: routes.index, icon: <SettingIcon /> },
];
