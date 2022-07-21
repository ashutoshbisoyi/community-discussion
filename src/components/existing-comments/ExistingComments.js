import React, { useContext } from 'react';
//mui
import { Divider } from '@mui/material';
//context
import CommentContext from '../../context/comments/CommentsContext';
//component
import UserComment from '../user-comment/UserComment';

const ExistingComments = () => {
  const { comments } = useContext(CommentContext);

  return (
    <>
      {comments.length > 0 && (
        <>
          <Divider />
          <div className='comments-container'>
            {comments &&
              comments
                .sort((a, b) => (a.upVotes.length > b.upVotes.length ? 1 : -1))
                .reverse()
                .map((comment, index) => (
                  <UserComment {...comment} key={index} />
                ))}
          </div>
        </>
      )}
    </>
  );
};

export default ExistingComments;
