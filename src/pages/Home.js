import React from 'react';
//mui
import { Typography } from '@mui/material';
//components
import CommentBar from '../components/comment-bar/CommentBar';
import ExistingComments from '../components/existing-comments/ExistingComments';
import Notification from '../components/notification/Notification';
import ConfirmationModal from '../components/confirmation-modal/ConfirmationModal';

const Home = () => {
  return (
    <div className='container'>
      <header>
        <Typography variant='h5' marginBottom={4}>
          Discussion
        </Typography>
      </header>
      <main>
        <CommentBar />
        <ExistingComments />
      </main>
      <Notification />
      <ConfirmationModal />
    </div>
  );
};

export default Home;
