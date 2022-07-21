import React from 'react';
//mui
import { Avatar, Grid, Typography } from '@mui/material';
//icons
import CircleIcon from '@mui/icons-material/Circle';
//moment
import Moment from 'react-moment';
//component
import CommentActions from '../comment-actions/CommentActions';

const UserComment = ({
  commentId,
  commentedUserName,
  commentedUserImage,
  commentedUserId,
  comment,
  commentDateTime,
  upVotes,
}) => {
  return (
    <Grid container spacing={1} className='user-comment'>
      <Grid item xs={2} md={1}>
        <Avatar alt={commentedUserName} src={commentedUserImage} />
      </Grid>
      <Grid item xs={10} md={11}>
        <div className='user-comment-title'>
          <Typography variant='subtitle1'>{commentedUserName}</Typography>
          <CircleIcon
            sx={{
              width: '5px',
              color: '#6b778f',
            }}
          />
          <Typography variant='body2' color='GrayText'>
            <Moment toNow>{commentDateTime}</Moment>
          </Typography>
        </div>
        <Typography
          variant='body2'
          className='user-comment-body'
          marginBottom={2}
        >
          {comment}
        </Typography>
        <CommentActions
          commentId={commentId}
          commentedUserId={commentedUserId}
          upVotes={upVotes}
        />
      </Grid>
    </Grid>
  );
};

export default UserComment;
