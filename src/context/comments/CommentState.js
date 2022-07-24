import { useContext, useEffect, useState } from 'react';
//context
import ConfirmationModalContext from '../confirmation-modal/ConfirmationModalContext';
import NotificationContext from '../notification/NotificationContext';
import CommentContext from './CommentsContext';

const CommentState = ({ children }) => {
  const [comments, setComments] = useState([]);
  const { modalDetails, setModalDetails } = useContext(
    ConfirmationModalContext
  );
  const { notificationData, setNotificationData } =
    useContext(NotificationContext);

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
    setNotificationData({
      ...notificationData,
      open: true,
      message: 'Comment Added',
    });
  };

  const removeComment = id => {
    setModalDetails({
      ...modalDetails,
      open: true,
      modalTitle: 'Do want to delete this comment?',
      modalText:
        'If you click on confirm then the comment along with all the replies and upvote details will be removed permanently.',
      confirmationAction: () => {
        const filteredComments = comments.filter(
          comment => comment.commentId !== id
        );
        updateComments(filteredComments);
        setModalDetails({ ...modalDetails, open: false });
        setNotificationData({
          ...notificationData,
          open: true,
          message: 'Comment Removed',
        });
      },
    });
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
      setNotificationData({
        ...notificationData,
        open: true,
        message: 'You upvoted this comment',
      });
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
    setNotificationData({
      ...notificationData,
      open: true,
      message: 'Upvote removed',
    });
  };

  const addReply = (commentId, reply) => {
    const updatedComments = comments.map(comment =>
      comment.commentId === commentId
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    );
    updateComments(updatedComments);
    setNotificationData({
      ...notificationData,
      open: true,
      message: 'Reply Added',
    });
  };

  const removeReply = (commentId, replyId) => {
    setModalDetails({
      ...modalDetails,
      open: true,
      modalTitle: 'Do want to remove this reply?',
      modalText: 'Your reply to this comment will be removed permanently.',
      confirmationAction: () => {
        const updatedComments = comments.map(comment =>
          comment.commentId === commentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  reply => reply.replyId !== replyId
                ),
              }
            : comment
        );
        updateComments(updatedComments);
        setModalDetails({ ...modalDetails, open: false });
        setNotificationData({
          ...notificationData,
          open: true,
          message: 'Reply Removed',
        });
      },
    });
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
