import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

import { SettingIcon } from "@schoolify/core/components/icon/settingIcon";

import routes from "@schoolify/core/utilities/routes";
import type { UserSchoolRoles } from "../../shared/types/api/ListSummarySchoolsEntity";
import { translateUserSchoolRoleToPersian } from "../../shared/utilities/translator";

export const schoolManagementSidebarData = (
  schoolId: string,
  schoolTitle?: string,
  role?: UserSchoolRoles
): DashboardSidebarDataProps[] => [
  {
    key: "schoolTitle",
    title: schoolTitle ?? "schoolTitle",
    link: routes.school.management.index(schoolId),
    type: "contentBox",
  },
  {
    key: "role",
    title: `نقش کاربر: ${translateUserSchoolRoleToPersian(role)}`,
    link: routes.school.management.index(schoolId),
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
    // icon: <SettingIcon />,
  },
  {
    key: "educationYear",
    title: "سال تحصیلی ",
    link: routes.school.management.educationYear.index(schoolId),
    // icon: <SettingIcon />,
  },
  {
    key: "educationLevel",
    title: "مقطع تحصیلی ",
    link: routes.school.management.educationLevel.index(schoolId),
    // icon: <SettingIcon />,
  },
  {
    key: "educationGrade",
    title: "پایه تحصیلی ",
    link: routes.school.management.educationGrade.index(schoolId),
    // icon: <SettingIcon />,
  },
  {
    key: "classes",
    title: "کلاس",
    link: routes.school.management.classes.index(schoolId),
    // icon: <SettingIcon />,
  },
  {
    key: "classStudents",
    title: "دانش‌آموزان کلاس",
    link: routes.school.management.classStudents.index(schoolId),
    // icon: <SettingIcon />,
  },
  {
    key: "costType",
    title: "عنوان هزینه",
    link: routes.school.management.costType.index(schoolId),
    // icon: <SettingIcon />,
  },
  {
    key: "cost",
    title: " هزینه",
    link: routes.school.management.cost.index(schoolId),
    // icon: <SettingIcon />,
  },
  {
    key: "studentPayment",
    title: "پرداخت",
    link: routes.school.management.studentPayment.index(schoolId),
    // icon: <SettingIcon />,
  },
  {
    key: "userRoles",
    title: "دسترسی کاربران",
    link: routes.school.management.studentPayment.index(schoolId),
    disabled: role !== "owner",
    // icon: <SettingIcon />,
  },
];
