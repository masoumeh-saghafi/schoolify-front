import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddEucationLevel from "../components/AddEducationLevel";
import ListEucationLevel from "../components/ListEducationYear";

export const tabEucationLevelEndpointsData: TabBoxDataProps[] = [
  {
    label: " افزودن ",
      key: "create",
    children: <AddEucationLevel />,
  },
  {
    label: " لیست  ",
    key: "list",
    children: <ListEucationLevel />,
  },
];
