import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddEducationYear from "@schoolify/features/user/school/management/educationYear/components/AddEducationYear";
import ListEducationYear from "@schoolify/features/user/school/management/educationYear/components/ListEducationYear";

export const tabEducationYearEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
    key: "create",
    children: <AddEducationYear />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListEducationYear />,
  },
];
