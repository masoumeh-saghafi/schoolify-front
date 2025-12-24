import type { TabBoxDataProps } from "@schoolify/core/components/common/TabBox";
import ListAdminTicket from "@schoolify/features/admin/tickets/components/ListAdminTicket";
import DetailAdminTicket from "@schoolify/features/admin/tickets/components/DetailAdminTicket";

export const tabAdminTicketData: TabBoxDataProps[] = [
  
  {
    label: "لیست تیکت ها",
    key: "list-admin-tickets",
    children: <ListAdminTicket />,
  },
  {
    label: "جزئیات تیکت",
    key: "ticket",
    children: <DetailAdminTicket />,
    hidden: true,
  },
];
