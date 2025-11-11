import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

import { SettingIcon } from "@schoolify/core/components/icon/settingIcon";
import { SupportAgentIcon } from "@schoolify/core/components/icon/SupportAgentIcon";

import routes from "@schoolify/core/utilities/routes";
import { genUUID } from "@schoolify/core/utilities/uuid";

// export const sidebarData: DashboardSidebarDataProps[] = [
//   {
//     key: genUUID(),
//     title: " پشتیبانی",
//     link: routes.ticket,
//     icon: <SupportAgentIcon />,
//   },
//   {
//     key: genUUID(),
//     title: "مدیریت حساب کاربری",
//     link: routes.profile,
//     icon: <SettingIcon />,
//   },
// ];

// hooks/useDashboardSidebarData.ts

// import routes from '@schoolify/core/utilities/routes'
// import { genUUID } from '@schoolify/core/utilities/uuid'

// import type { DashboardSidebarDataProps } from '@schoolify/features/shared/dashboard/components/Sidebar'
// import { SupportAgentIcon } from '@schoolify/core/components/icon/SupportAgentIcon'
// import { SettingIcon } from '@schoolify/core/components/icon/settingIcon'
import { useMemo } from "react";

import useListSummarySchools from "@schoolify/features/user/shared/school/hooks/useListSummarySchools";

export const useDashboardSidebarData = (): DashboardSidebarDataProps[] => {
  // 📦 دریافت لیست مدارس از API
  const { data: schools, isLoading, error } = useListSummarySchools();

  // ⚙️ بخش‌های ثابت (غیر وابسته به API)
  const staticItems: DashboardSidebarDataProps[] = [
    {
      key: genUUID(),
      title: "پشتیبانی",
      link: routes.ticket,
      icon: <SupportAgentIcon />,
      type: "listItem",
    },
    {
      key: genUUID(),
      title: "مدیریت حساب کاربری",
      link: routes.profile,
      icon: <SettingIcon />,
      type: "listItem",
    },
    {
      key: genUUID(),
      title: "لیست مدارس",
      type: "text",
    },
  ];

  // 🏫 تولید داینامیک بخش مدارس
  const dynamicSchoolItems: DashboardSidebarDataProps[] = useMemo(() => {
    if (!schools || isLoading || error) return [];

    return schools.map((school) => ({
      key: genUUID(),
      title: school.data?.title ?? "",
      icon: null,
      link: "",
      children: [
        {
          key: genUUID(),
          title: "داشبورد مدیریت",
          link: routes.school.management.index(school.id),
          icon: <SettingIcon />,
          disabled: school.data?.role === "reporter",
          type: "listItem",
        },
        {
          key: genUUID(),
          title: "داشبورد نظارت",
          link: "", //routes.schoolReport(school.id),
          icon: <SettingIcon />,
          type: "listItem",
        },
      ],
    }));
  }, [schools, isLoading, error]);

  // ترکیب داده‌های ثابت + داینامیک
  return [...staticItems, ...dynamicSchoolItems];
};
