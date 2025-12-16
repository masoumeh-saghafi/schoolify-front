import routes from "@schoolify/core/utilities/routes";
import type { DashboardSidebarDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";
import type { userRoles } from "@schoolify/features/shared/profile/types/api/UserProfileEntity";

export const adminDashboardSidebarData = (
  role: userRoles | undefined
): DashboardSidebarDataProps[] =>
  role && role !== "user"
    ? [
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
          key: "customers",
          title: "مشتریان",
          link: routes.admin.customers.index(),
          // icon: <SettingIcon />,
        },
        {
          key: "payments",
          title: "پرداخت‌ها",
          link: routes.admin.payments.index(),
          // icon: <SettingIcon />,
          disabled: role !== "superManager" && role !== "manager",
        },
        {
          key: "managers",
          title: "مدیران",
          link: routes.admin.managers.index(),
          // icon: <SettingIcon />,
          disabled: role !== "superManager",
        },
      ]
    : [];
