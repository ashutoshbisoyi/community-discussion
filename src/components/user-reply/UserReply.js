import React, { useContext } from 'react';
//mui
import { Avatar, Box, Grid, Typography } from '@mui/material';
//icons
import CircleIcon from '@mui/icons-material/Circle';
//moment
import Moment from 'react-moment';
//components
import { CommentActionButton } from '../button/Button';
//context
import UserContext from '../../context/user/UserContext';
import CommentContext from '../../context/comments/CommentsContext';

const UserReply = ({
  replyId,
  repliedUserName,
  repliedUserImage,
  repliedUserId,
  reply,
  replyDateTime,
  commentId,
}) => {
  const { currentUser } = useContext(UserContext);
  const { removeReply } = useContext(CommentContext);
  const { userId } = currentUser;

  const handleDeleteReply = () => {
    removeReply(commentId, replyId);
  };

  return (
    <Grid container spacing={1} marginBottom={3}>
      <Grid item xs={2} md={1}>
        <Avatar alt={repliedUserName} src={repliedUserImage} />
      </Grid>
      <Grid item xs={10} md={11}>
        <Box className='user-comment-title'>
          <Typography variant='subtitle1'>{repliedUserName}</Typography>
          <CircleIcon
            sx={{
              width: '5px',
              color: '#6b778f',
            }}
          />
          <Typography variant='body2' color='GrayText'>
            <Moment toNow>{replyDateTime}</Moment>
          </Typography>
        </Box>
        <Typography
          variant='body2'
          className='user-comment-body'
          marginBottom={2}
        >
          {reply}
        </Typography>
        {repliedUserId === userId && (
          <CommentActionButton color='secondary' onClick={handleDeleteReply}>
            Delete
          </CommentActionButton>
        )}
      </Grid>
    </Grid>
  );
};

export default UserReply;
