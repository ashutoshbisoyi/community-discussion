import { useEffect, useState } from 'react';
import CommentContext from './CommentsContext';

const CommentState = ({ children }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem('existingComments');
    storedComments && setComments(JSON.parse(storedComments));
  }, []);

  const updateComments = comments => {
    setComments(comments);
    localStorage.setItem('existingComments', JSON.stringify(comments));
  };

  const addNewComment = data => {
    const newSetOfComments = [...comments, data];
    updateComments(newSetOfComments);
  };

  const removeComment = id => {
    const filteredComments = comments.filter(
      comment => comment.commentId !== id
    );
    updateComments(filteredComments);
  };

  const addUpVote = (commentId, user) => {
    const doesUpVoteExists = comments
      .filter(comment => comment.commentId === commentId)[0]
      .upVotes.some(prevUser => prevUser.userId === user.userId);

    if (!doesUpVoteExists) {
      const updatedComments = comments.map(comment =>
        comment.commentId === commentId
          ? { ...comment, upVotes: [...comment.upVotes, user] }
          : comment
      );
      updateComments(updatedComments);
    }
  };

  const unVote = (commentId, userId) => {
    const updatedComments = comments.map(comment =>
      comment.commentId === commentId
        ? {
            ...comment,
            upVotes: comment.upVotes.filter(user => user.userId !== userId),
          }
        : comment
    );
    updateComments(updatedComments);
  };

  const addReply = (commentId, reply) => {
    const updatedComments = comments.map(comment =>
      comment.commentId === commentId
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    );
    updateComments(updatedComments);
  };

  const removeReply = (commentId, replyId) => {
    console.log('going to delete reply with id', replyId);
    const updatedComments = comments.map(comment =>
      comment.commentId === commentId
        ? {
            ...comment,
            replies: comment.replies.filter(reply => reply.replyId !== replyId),
          }
        : comment
    );
    updateComments(updatedComments);
  };

  const value = {
    comments,
    addNewComment,
    removeComment,
    addUpVote,
    unVote,
    addReply,
    removeReply,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export default CommentState;
