import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddTicket from "@schoolify/features/user/profile/tickets/components/AddTicket";
import ListTicket from "@schoolify/features/user/profile/tickets/components/ListTicket";
import DetailTicket from "@schoolify/features/user/profile/tickets/components/DetailTicket";

export const tabTicketData: TabBoxDataProps[] = [
  { label: "افزودن تیکت", key: "add-ticket", children: <AddTicket /> },
  {
    label: "لیست تیکت ها",
    key: "list-tickets",
    children: <ListTicket />,
  },
  {
    label: "جزئیات تیکت",
    key: "ticket",
    children: <DetailTicket />,
    hidden: true,
  },
];
