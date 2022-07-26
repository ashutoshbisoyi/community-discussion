import React from 'react';
//mui
import { Avatar, Box, Grid, Tooltip, Typography } from '@mui/material';
//icons
import CircleIcon from '@mui/icons-material/Circle';
//moment
import Moment from 'react-moment';
//component
import CommentActions from '../comment-actions/CommentActions';
import UserReply from '../user-reply/UserReply';

const UserComment = ({
  commentId,
  commentedUserName,
  commentedUserImage,
  commentedUserId,
  comment,
  commentDateTime,
  upVotes,
  replies,
}) => {
  return (
    <Grid
      container
      spacing={1}
      className={
        replies && replies.length > 0
          ? 'user-comment have-replies'
          : 'user-comment'
      }
    >
      <Grid item xs={2} md={1}>
        <Avatar alt={commentedUserName} src={commentedUserImage} />
      </Grid>
      <Grid item xs={10} md={11}>
        <Box className='user-comment-title'>
          <Typography variant='subtitle1'>{commentedUserName}</Typography>
          <CircleIcon
            sx={{
              width: '5px',
              color: '#6b778f',
            }}
          />
          <Tooltip title={<Moment>{commentDateTime}</Moment>}>
            <Typography variant='body2' color='GrayText'>
              <Moment fromNow>{commentDateTime}</Moment>
            </Typography>
          </Tooltip>
        </Box>
        <pre>
          <Typography
            variant='body2'
            className='user-comment-body'
            marginBottom={2}
          >
            {comment}
          </Typography>
        </pre>
        <CommentActions
          commentId={commentId}
          commentedUserId={commentedUserId}
          upVotes={upVotes}
        />
        <Box className='reply-container'>
          {replies &&
            replies.map((reply, index) => <UserReply {...reply} key={index} />)}
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserComment;
