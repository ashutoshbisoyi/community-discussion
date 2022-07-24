import React, { useContext } from 'react';
//mui
import { Box, Divider } from '@mui/material';
//context
import CommentContext from '../../context/comments/CommentsContext';
//component
import UserComment from '../user-comment/UserComment';
import ReplyModal from '../reply-modal/ReplyModal';

const ExistingComments = () => {
  const { comments } = useContext(CommentContext);
  return (
    <>
      {comments.length > 0 && (
        <>
          <Divider />
          <Box className='comments-container'>
            {/* if comments exist then sort them according to up votes and reverse the array to map them in order of higher to lower */}
            {comments &&
              comments
                .sort((a, b) => (a.upVotes.length > b.upVotes.length ? 1 : -1))
                .reverse()
                .map((comment, index) => (
                  <UserComment {...comment} key={index} />
                ))}
          </Box>
          <ReplyModal />
        </>
      )}
    </>
  );
};

export default ExistingComments;
