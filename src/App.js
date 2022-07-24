import React from 'react';
//material ui
import { ThemeProvider } from '@emotion/react';
// utils
import theme from './utils/theme';
//context
import UserState from './context/user/UserState';
import CommentState from './context/comments/CommentState';
import NotificationState from './context/notification/NotificationState';
import ReplyModalState from './context/reply-modal/ReplyModalState';
// components
import Home from './pages/Home';
import NavBar from './components/navbar/NavBar';
import ConfirmationModalState from './context/confirmation-modal/ConfirmationModalState';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserState>
        <ReplyModalState>
          <NotificationState>
            <ConfirmationModalState>
              <CommentState>
                <NavBar />
                <Home />
              </CommentState>
            </ConfirmationModalState>
          </NotificationState>
        </ReplyModalState>
      </UserState>
    </ThemeProvider>
  );
};

export default App;
