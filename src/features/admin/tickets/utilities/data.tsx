import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import AddTicket from "../components/AddTicket";
import ListTicket from "../components/ListTicket";
import DetailTicket from "../components/DetailTicket";

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
