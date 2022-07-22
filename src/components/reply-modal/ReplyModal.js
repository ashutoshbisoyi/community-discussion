import React, { useContext, useState } from 'react';
//mui
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
//uuid
import uuid from 'react-uuid';
//context
import CommentContext from '../../context/comments/CommentsContext';
import ReplyModalContext from '../../context/reply-modal/ReplyModalContext';
import UserContext from '../../context/user/UserContext';
//components
import { PrimaryButton } from '../button/Button';

const ReplyModal = () => {
  const [replyText, setReplyText] = useState('');

  const { replyModalData } = useContext(ReplyModalContext);
  const { addReply } = useContext(CommentContext);
  const { currentUser } = useContext(UserContext);

  const { name, image, userId } = currentUser;
  const { open, handleClose, commentId } = replyModalData;

  const handleInputChange = e => setReplyText(e.target.value);

  const closeModal = () => {
    setReplyText('');
    handleClose();
  };

  const onReply = () => {
    const newReply = {
      replyId: uuid(),
      repliedUserName: name,
      repliedUserId: userId,
      repliedUserImage: image,
      reply: replyText,
      replyDateTime: new Date(),
      commentId: commentId,
    };
    addReply(commentId, newReply);
    setReplyText('');
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={closeModal}
      maxWidth='sm'
      fullWidth={true}
      aria-labelledby='comment-reply-title'
    >
      <DialogTitle id='comment-reply-title'>Enter your reply</DialogTitle>
      <DialogContent>
        <TextField
          id='comment-multiline-reply'
          label='Your Reply'
          value={replyText}
          multiline
          rows={2}
          variant='filled'
          fullWidth
          onChange={handleInputChange}
          autoFocus
        />
      </DialogContent>
      <DialogActions>
        <PrimaryButton onClick={closeModal}>Close</PrimaryButton>
        <PrimaryButton onClick={onReply} variant='contained' autoFocus>
          Reply
        </PrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default ReplyModal;
