import React from 'react';
//material ui
import { ThemeProvider } from '@emotion/react';
// utils
import theme from './utils/theme';
//context
import UserState from './context/user/UserState';
import CommentState from './context/comments/CommentState';
import NotificationState from './context/notification/NotificationState';
// components
import Home from './pages/Home';
import NavBar from './components/navbar/NavBar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserState>
        <CommentState>
          <NotificationState>
            <NavBar />
            <Home />
          </NotificationState>
        </CommentState>
      </UserState>
    </ThemeProvider>
  );
};

export default App;
