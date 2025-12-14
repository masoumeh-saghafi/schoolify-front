import routes from "@schoolify/core/utilities/routes";
import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

export const adminDashboardSidebarData = (
  role: string
): DashboardSidebarDataProps[] => [
  {
    key: "adminTitle",
    title: "داشبورد ادمین",
    // link: routes.school.management.index(schoolId),
    type: "contentBox",
  },
  {
    key: "role",
    title: role
      ? `نقش کاربر: ${role}` //${translateUserSchoolRoleToPersian(role)}
      : "درحال دریافت اطلاعات",
    // link: routes.school.management.index(schoolId),
    type: "text",
  },

  {
    key: "tickets",
    title: "تیکت‌ها",
    link: routes.admin.tickets.index(),
    // icon: <SettingIcon />,
  },
  {
    key: "payments",
    title: "پرداخت‌ها",
    link: routes.admin.payments.index(),
    // icon: <SettingIcon />,
  },
  {
    key: "customers",
    title: "مشتریان",
    link: routes.admin.customers.index(),
    // icon: <SettingIcon />,
  },
  {
    key: "managers",
    title: "مدیران",
    link: routes.admin.managers.index(),
    // icon: <SettingIcon />,
  },
];
