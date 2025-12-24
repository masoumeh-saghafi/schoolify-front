// React Type
import { useEffect, useState, type ReactNode } from 'react'

// MUI Components
import Alert from '@schoolify/core/components/base/inputs/Alert'
import Snackbar from '@schoolify/core/components/base/inputs/Snackbar'

// Core Components
import { useNotificationStore } from '@schoolify/core/store'

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  // Hooks
  const notification = useNotificationStore()

  // States
  const [messages, setMessages] = useState<string[]>([])

  // Effect

  useEffect(() => {
    if (notification.messages) {
      const newMessages = Array.isArray(notification.messages)
        ? notification.messages
        : [notification.messages]

      setMessages(newMessages)
    }
  }, [notification.messages])

  // Handlers
  const handleClose = (indexToClose: number) => {
    setMessages(prev => prev.filter((_, i) => i !== indexToClose))
    notification.setNotification(messages, notification.type)
  }

  // Render
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
            vertical: 'bottom',
            horizontal: 'center'
          }}
          style={{ bottom: `${20 + index * 70}px` }} // Stacking vertically
        >
          <Alert
            severity={notification.type}
            variant='filled'
            onClose={() => handleClose(index)}
          >
            {msg}
          </Alert>
        </Snackbar>
      ))}
    </>
  )
}
