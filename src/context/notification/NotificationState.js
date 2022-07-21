import { useState } from 'react';
import NotificationContext from './NotificationContext';

const NotificationState = ({ children }) => {
  const [notificationData, setNotificationData] = useState({
    open: false,
    onClose: () => setNotificationData({ ...notificationData, open: false }),
    message: 'Default Message',
  });

  const value = { notificationData, setNotificationData };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationState;
