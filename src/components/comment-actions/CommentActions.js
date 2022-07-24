import React, { useContext, useEffect, useState } from 'react';
//mui
import {
  Avatar,
  Box,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Typography,
} from '@mui/material';
//icons
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//components
import { CommentActionButton } from '../button/Button';
// context
import CommentContext from '../../context/comments/CommentsContext';
import UserContext from '../../context/user/UserContext';
import ReplyModalContext from '../../context/reply-modal/ReplyModalContext';

const CommentActions = ({ commentId, commentedUserId, upVotes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [upVoteExists, setUpVoteExists] = useState(false);

  const { currentUser } = React.useContext(UserContext);
  const { removeComment, addUpVote, unVote } = useContext(CommentContext);
  const { replyModalData, setReplyModalData } = useContext(ReplyModalContext);

  const { userId, name, image } = currentUser;

  useEffect(() => {
    setUpVoteExists(upVotes.some(prevUser => prevUser.userId === userId));
  }, [upVotes, userId]);

  const handleRemoveComment = () => {
    removeComment(commentId);
  };

  const handleUpVote = () => {
    addUpVote(commentId, {
      userId,
      name,
      image,
    });
  };

  const handleUnVote = () => {
    unVote(commentId, userId);
  };

  const handlePopoverOpen = event => setAnchorEl(event.currentTarget);
  const handlePopoverClose = () => setAnchorEl(null);

  const openReplyModal = () =>
    setReplyModalData({ ...replyModalData, open: true, commentId: commentId });

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box>
      {/* up vote  */}
      <CommentActionButton
        onClick={upVoteExists ? handleUnVote : handleUpVote}
        disabled={userId === commentedUserId}
        color={upVoteExists ? 'secondary' : 'primary'}
        sx={{ marginRight: '0.5em' }}
      >
        {upVoteExists ? (
          <>
            <ArrowDropDownIcon /> Unvote{' '}
          </>
        ) : (
          <>
            <ArrowDropUpIcon /> Upvote{' '}
          </>
        )}
      </CommentActionButton>

      {upVotes.length > 0 && (
        <Chip
          label={upVotes.length}
          size='small'
          aria-describedby={id}
          onClick={handlePopoverOpen}
          sx={{ marginRight: '1em' }}
        />
      )}

      {/* up vote pop over  */}
      <Popover
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        disableRestoreFocus
      >
        <List>
          {upVotes.map((vote, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar
                  alt={vote.name}
                  src={vote.image}
                  sx={{ width: 30, height: 30 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant='body2'>{vote.name}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </Popover>

      {/* reply  */}
      <CommentActionButton onClick={openReplyModal}>Reply</CommentActionButton>

      {/* delete  */}
      {userId === commentedUserId && (
        <CommentActionButton color='secondary' onClick={handleRemoveComment}>
          Delete
        </CommentActionButton>
      )}
    </Box>
  );
};

export default CommentActions;
