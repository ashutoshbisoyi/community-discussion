import { useState } from 'react';
import ReplyModalContext from './ReplyModalContext';

const ReplyModalState = ({ children }) => {
  const [replyModalData, setReplyModalData] = useState({
    open: false,
    handleClose: () => setReplyModalData({ ...replyModalData, open: false }),
    commentId: '',
  });

  const value = { replyModalData, setReplyModalData };
  return (
    <ReplyModalContext.Provider value={value}>
      {children}
    </ReplyModalContext.Provider>
  );
};

export default ReplyModalState;
