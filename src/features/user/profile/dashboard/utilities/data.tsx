import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

import { SettingIcon } from "@schoolify/core/components/icon/settingIcon";
import { SupportAgentIcon } from "@schoolify/core/components/icon/SupportAgentIcon";

import routes from "@schoolify/core/utilities/routes";
import { genUUID } from "@schoolify/core/utilities/uuid";

export const sidebarData: DashboardSidebarDataProps[] = [
  {
    key: genUUID(),
    title: " پشتیبانی",
    link: routes.ticket,
    icon: <SupportAgentIcon />,
  },
  {
    key: genUUID(),
    title: "مدیریت حساب کاربری",
    link: routes.profile,
    icon: <SettingIcon />,
  },
];
