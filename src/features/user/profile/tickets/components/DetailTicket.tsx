import ContentBox from "@schoolify/core/components/common/ContentBox";
import { useLocation } from "react-router-dom";

interface DetailTicketProps {}

const DetailTicket = (props: DetailTicketProps) => {
  const location = useLocation();

  const queryParams = location.hash.split("?")[1];
  const params = new URLSearchParams(queryParams);
  const ticketId = params.get("id");

  // Render
  return <ContentBox label="جزئیات تیکت">جزئیات تیکت # {ticketId}</ContentBox>;
};
export default DetailTicket;
