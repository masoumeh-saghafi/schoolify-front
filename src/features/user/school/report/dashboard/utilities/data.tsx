import routes from "@schoolify/core/utilities/routes";
import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";
import { translateUserSchoolRoleToPersian } from "@schoolify/features/user/shared/school/utilities/translator";
import type { UserSchoolRoles } from "@schoolify/features/user/shared/school/types/api/ListSummarySchoolsEntity";

export const schoolReportSidebarData = (
  schoolId: string,
  schoolTitle?: string,
  role?: UserSchoolRoles
): DashboardSidebarDataProps[] => [
  {
    key: "schoolTitle",
    title: schoolTitle ? schoolTitle : "درحال دریافت اطلاعات",
    type: "contentBox",
  },
  {
    key: "role",
    title: role
      ? `نقش کاربر: ${translateUserSchoolRoleToPersian(role)}`
      : "درحال دریافت اطلاعات",
    type: "text",
  },
  {
    key: "students-full",
    title: "گزارش کامل دانش‌آموزان",
    link: routes.school.report.student.full.index(schoolId),
  },
  {
    key: "students-summary",
    title: "گزارش خلاصه دانش‌آموزان",
    link: routes.school.report.student.summary.index(schoolId),
  },
];
