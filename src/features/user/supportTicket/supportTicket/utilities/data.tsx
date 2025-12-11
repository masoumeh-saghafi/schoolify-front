import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";

import AddStudent from "@schoolify/features/user/school/management/student/components/AddStudent";
import ListStudent from "@schoolify/features/user/school/management/student/components/ListStudent";
import AddTicket from "../components/AddTicket";

export const tabTicketData: TabBoxDataProps[] = [
  {
    label: " ایجاد دانش آموز",
    key: "create",
    children: <AddTicket />,
  },
  {
    label: " لیست دانش آموزان ",
    key: "list",
    children: <ListStudent />,
  },
];
