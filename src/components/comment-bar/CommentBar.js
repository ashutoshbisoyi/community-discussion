import React, { useContext, useState } from 'react';
//mui
import { Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';
//context
import CommentContext from '../../context/comments/CommentsContext';
import UserContext from '../../context/user/UserContext';
//components
import { PrimaryButton } from '../button/Button';
//uuid
import uuid from 'react-uuid';

const CommentBar = () => {
  const [userComment, setUserComment] = useState('');

  const { currentUser } = React.useContext(UserContext);
  const { addNewComment } = useContext(CommentContext);

  const { userId, name, image } = currentUser;

  const wordLimit = 35;

  const handleInputChange = e => setUserComment(e.target.value);

  const addComment = e => {
    e.preventDefault();

    const newCommentData = {
      commentId: uuid(),
      commentedUserName: name,
      commentedUserId: userId,
      commentedUserImage: image,
      comment: userComment.trim(),
      commentDateTime: new Date(),
      upVotes: [],
      replies: [],
    };

    addNewComment(newCommentData);
    setUserComment('');
  };

  return (
    <Grid container spacing={2} marginBottom={6}>
      <Grid item xs={2} sm={1}>
        <Avatar alt={name} src={image} />
      </Grid>
      <Grid item xs={10} sm={9}>
        <form onSubmit={addComment}>
          <input
            type='text'
            value={userComment.slice(0, wordLimit - 1)}
            placeholder='What are your thoughts?'
            className='comment-input'
            onChange={handleInputChange}
            autoFocus
          />
        </form>
        <Box className='word-limit'>
          {userComment.length} / {wordLimit}
        </Box>
      </Grid>
      <Grid item xs={12} sm={2} className='comment-btn-wrapper'>
        <PrimaryButton variant='contained' onClick={addComment}>
          Comment
        </PrimaryButton>
      </Grid>
    </Grid>
  );
};

export default CommentBar;
