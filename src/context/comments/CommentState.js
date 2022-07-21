import { useEffect, useState } from 'react';
import CommentContext from './CommentsContext';

const CommentState = ({ children }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem('existingComments');
    storedComments && setComments(JSON.parse(storedComments));
  }, []);

  const saveInLocalStorage = comments => {
    localStorage.setItem('existingComments', JSON.stringify(comments));
  };

  const addNewComment = data => {
    const newSetOfComments = [...comments, data];
    setComments(newSetOfComments);
    saveInLocalStorage(newSetOfComments);
  };

  const removeComment = id => {
    const filteredComments = comments.filter(
      comment => comment.commentId !== id
    );
    setComments(filteredComments);
    saveInLocalStorage(filteredComments);
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

      setComments(updatedComments);
      saveInLocalStorage(updatedComments);
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

    setComments(updatedComments);
    saveInLocalStorage(updatedComments);
  };

  const value = { comments, addNewComment, removeComment, addUpVote, unVote };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};

export default CommentState;
