import React, { useContext } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { PrimaryButton } from '../button/Button';
import ConfirmationModalContext from '../../context/confirmation-modal/ConfirmationModalContext';

const ConfirmationModal = () => {
  const { modalDetails } = useContext(ConfirmationModalContext);
  const { open, handleClose, modalTitle, modalText, confirmationAction } =
    modalDetails;
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{modalTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {modalText}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <PrimaryButton onClick={handleClose}>cancel</PrimaryButton>
        <PrimaryButton onClick={confirmationAction} autoFocus>
          Confirm
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
