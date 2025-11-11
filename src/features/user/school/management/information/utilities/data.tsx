import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import SchoolName from "@schoolify/features/user/school/management/information/components/SchoolName";
import ChangeSchoolName from "@schoolify/features/user/school/management/information/components/ChangeSchoolName";
import SchoolSubscriptionDetails from "@schoolify/features/user/school/management/information/components/SchoolSubscriptionDetails";

export const tabSchoolInfoData: TabBoxDataProps[] = [
  {
    label: " نام مدرسه",
    key: "info",
    children: <SchoolName />,
  },
  {
    label: "ویرایش نام ",
    key: "edit",
    children: <ChangeSchoolName />,
  },
  {
    label: " مشخصات اشتراک",
    key: "subscription",
    children: <SchoolSubscriptionDetails />,
  },
];
