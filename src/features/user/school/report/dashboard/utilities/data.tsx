import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

import { SettingIcon } from "@schoolify/core/components/icon/settingIcon";

import routes from "@schoolify/core/utilities/routes";
import type { UserSchoolRoles } from "../../shared/types/api/ListSummarySchoolsEntity";
import { translateUserSchoolRoleToPersian } from "../../shared/utilities/translator";

export const schoolReportSidebarData = (
  schoolId: string,
  schoolTitle?: string,
  role?: UserSchoolRoles
): DashboardSidebarDataProps[] => [
  {
    key: "schoolTitle",
    title: schoolTitle ? schoolTitle : "درحال دریافت اطلاعات",
    // link: routes.school.management.index(schoolId),
    type: "contentBox",
  },
  {
    key: "role",
    title: role
      ? `نقش کاربر: ${translateUserSchoolRoleToPersian(role)}`
      : "درحال دریافت اطلاعات",
    // link: routes.school.management.index(schoolId),
    type: "text",
  },
  {
    key: "students-full",
    title: "گزارش کامل دانش‌آموزان",
    link: routes.school.report.student.full.index(schoolId),
    // icon: <SettingIcon />,
  },
  {
    key: "students-summary",
    title: "گزارش خلاصه دانش‌آموزان",
    link: routes.school.report.student.summary.index(schoolId),
    // icon: <SettingIcon />,
  },
];
