import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import PersonalInfoPage from "@schoolify/features/user/profile/accountManagement/personalInfo/components/Page";
import SubscriptionPage from "../subscription/components/Page";
import RecentPayments from "../payment/components/RecentPayments";
import EditInfoPage from "../editInfo/components/page";

export const tabData: TabBoxDataProps[] = [
  {
    label: "اطلاعات شخصی",
    key: "personal-info",
    children: <PersonalInfoPage />,
  },
  { label: "اشتراک", key: "subscription", children: <SubscriptionPage /> },
  { label: "تراکنش ها", key: "payments", children: <RecentPayments /> },
  { label: "ویرایش اطلاعات", key: "edit-info", children: <EditInfoPage/> },
];
