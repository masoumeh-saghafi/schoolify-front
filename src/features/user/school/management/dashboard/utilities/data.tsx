import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

import { SettingIcon } from "@schoolify/core/components/icon/settingIcon";

import routes from "@schoolify/core/utilities/routes";

export const schoolManagementSidebarData = (
  schoolId: string
): DashboardSidebarDataProps[] => [
  {
    key: 'schoolManagement',
    title: "مدیریت مدرسه",
    link: routes.school.management.index(schoolId),
    icon: <SettingIcon />,
  },
  {
    key: 'students',
    title: "دانش‌آموزان",
    link: routes.school.management.student.index(schoolId),
    // icon: <SettingIcon />,
    },
   {
    key: 'educationYear',
    title: "سال تحصیلی ",
    link: routes.school.management.educationYear.index(schoolId),
    // icon: <SettingIcon />,
    },
    {
    key: 'educationLevel',
    title: "مقطع تحصیلی ",
    link: routes.school.management.educationLevel.index(schoolId),
    // icon: <SettingIcon />,
    },
      {
    key: 'educationGrade',
    title: "پایه تحصیلی ",
    link: routes.school.management.educationGrade.index(schoolId),
    // icon: <SettingIcon />,
  },  {
    key: 'classes',
    title: "کلاس",
    link: routes.school.management.classes.index(schoolId),
    // icon: <SettingIcon />,
  },
];
