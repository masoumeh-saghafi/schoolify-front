import { create } from "zustand";

interface NotificationState {
  messages?: string[];
  type?: "error" | "success";
  setNotification: (messages?: string[], type?: "error" | "success") => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  messages: undefined,
  type: undefined,
  setNotification: (messages, type) =>
    set({
      messages: messages,
      type: type,
    }),
}));
