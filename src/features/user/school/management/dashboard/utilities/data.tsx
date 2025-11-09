import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

import { SettingIcon } from "@schoolify/core/components/icon/settingIcon";

import routes from "@schoolify/core/utilities/routes";
import { genUUID } from "@schoolify/core/utilities/uuid";

export const schoolManagementSidebarData = (
  schoolId: string
): DashboardSidebarDataProps[] => [
  {
    key: genUUID(),
    title: "مدیریت مدرسه",
    link: routes.school.management.index(schoolId),
    icon: <SettingIcon />,
  },
  {
    key: genUUID(),
    title: "دانش‌آموزان",
    link: routes.school.management.student.index(schoolId),
    // icon: <SettingIcon />,
  },
];
