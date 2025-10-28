import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import PersonalInfo from "../components/PersonalInfo";

export const tabData: TabBoxDataProps[] = [
  { label: "اطلاعات شخصی", key: "personal-info", children: <PersonalInfo /> },
  { label: "اشتراک", key: "subscription", children: <></> },
  { label: "تراکنش ها", key: "payments", children: <></> },
  { label: "ویرایش اطلاعات", key: "edit-info", children: <></> },
];
