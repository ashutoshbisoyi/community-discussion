import { useState } from 'react';
import ConfirmationModalContext from './ConfirmationModalContext';

const ConfirmationModalState = ({ children }) => {
  const [modalDetails, setModalDetails] = useState({
    open: false,
    handleClose: () => setModalDetails({ ...modalDetails, open: false }),
    modalTitle: 'modal-title',
    modalText: 'modal-text',
    confirmationAction: () => {},
  });

  const value = { modalDetails, setModalDetails };

  return (
    <ConfirmationModalContext.Provider value={value}>
      {children}
    </ConfirmationModalContext.Provider>
  );
};

export default ConfirmationModalState;
