import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

import { SettingIcon } from "@schoolify/core/components/icon/settingIcon";

import routes from "@schoolify/core/utilities/routes";
import { translateUserSchoolRoleToPersian } from "@schoolify/features/user/shared/school/utilities/translator";
import type { UserSchoolRoles } from "@schoolify/features/user/shared/school/types/api/ListSummarySchoolsEntity";

export const schoolManagementSidebarData = (
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
    key: "schoolManagement",
    title: "مدیریت مدرسه",
    link: routes.school.management.index(schoolId),
    icon: <SettingIcon />,
  },
  {
    key: "students",
    title: "دانش‌آموزان",
    link: routes.school.management.student.index(schoolId),
  },
  {
    key: "educationYear",
    title: "سال تحصیلی ",
    link: routes.school.management.educationYear.index(schoolId),
  },
  {
    key: "educationLevel",
    title: "مقطع تحصیلی ",
    link: routes.school.management.educationLevel.index(schoolId),
  },
  {
    key: "educationGrade",
    title: "پایه تحصیلی ",
    link: routes.school.management.educationGrade.index(schoolId),
  },
  {
    key: "classes",
    title: "کلاس",
    link: routes.school.management.classes.index(schoolId),
  },
  {
    key: "classStudents",
    title: "دانش‌آموزان کلاس",
    link: routes.school.management.classStudents.index(schoolId),
  },
  {
    key: "costType",
    title: "عنوان هزینه",
    link: routes.school.management.costType.index(schoolId),
  },
  {
    key: "cost",
    title: " هزینه",
    link: routes.school.management.cost.index(schoolId),
  },
  {
    key: "studentPayment",
    title: "پرداخت",
    link: routes.school.management.studentPayment.index(schoolId),
  },
  {
    key: "userRoles",
    title: "دسترسی کاربران",
    link: routes.school.management.userRoles.index(schoolId),
    disabled: role !== "owner",
  },
];
