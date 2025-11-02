export default interface ListNotificationsEntity {
  title: string;
  createDate: number;
  content: string;
  type: "info" | "warning" | "danger";
}
