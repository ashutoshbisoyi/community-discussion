import React, { useContext } from 'react';
//mui
import { Snackbar } from '@mui/material';
//context
import NotificationContext from '../../context/notification/NotificationContext';

const Notification = () => {
  const { notificationData } = useContext(NotificationContext);
  return (
    <Snackbar
      open={notificationData.open}
      autoHideDuration={6000}
      onClose={notificationData.onClose}
      message={notificationData.message}
    />
  );
};

export default Notification;
