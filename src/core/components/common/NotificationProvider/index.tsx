import React, { useEffect, useState, type ReactNode } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useNotificationStore } from "@schoolify/core/store";

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const notification = useNotificationStore();

  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (notification.messages) {
      const newMessages = Array.isArray(notification.messages)
        ? notification.messages
        : [notification.messages];

      setMessages(newMessages);
    }
  }, [notification.messages]);

  const handleClose = (indexToClose: number) => {
    setMessages((prev) => prev.filter((_, i) => i !== indexToClose));
    notification.setNotification(messages, notification.type);
  };

  return (
    <>
      {children}
      {messages.map((msg, index) => (
        <Snackbar
          key={index}
          open={true}
          autoHideDuration={5000}
          onClose={() => handleClose(index)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          style={{ bottom: `${20 + index * 70}px` }} // Stacking vertically
        >
          <Alert
            severity={notification.type}
            variant="filled"
            onClose={() => handleClose(index)}
          >
            {msg}
          </Alert>
        </Snackbar>
      ))}
    </>
  );
};
