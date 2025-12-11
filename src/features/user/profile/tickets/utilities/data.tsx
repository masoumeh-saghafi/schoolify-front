import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddTicket from "../components/AddTicket";

export const tabTicketData: TabBoxDataProps[] = [
  // {
  //   label: 'لیست تیکت ها',
  //   key: 'list-tickets',
  //   children: <PersonalInfoTab />
  // },
  { label: "افزودن تیکت", key: "add-ticket", children: <AddTicket /> },
];
