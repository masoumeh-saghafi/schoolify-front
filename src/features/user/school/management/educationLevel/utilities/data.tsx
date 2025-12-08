import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddEducationLevel from "@schoolify/features/user/school/management/educationLevel/components/AddEducationLevel";
import ListEducationLevel from "@schoolify/features/user/school/management/educationLevel/components/ListEducationLevel";

export const tabEducationLevelEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddEducationLevel />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListEducationLevel />,
  },
];
