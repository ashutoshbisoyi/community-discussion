import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Box, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import UserContext from '../../context/user/UserContext';

const NavBar = () => {
  const { currentUser, generateRandomUser } = React.useContext(UserContext);
  const { name, image } = currentUser;
  return (
    <AppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters className='nav-wrapper'>
          <Typography variant='h6' component='h1' className='nav-title'>
            Community Room
          </Typography>
          <Box className='nav-user-wrapper'>
            <Typography variant='body1'>{name}</Typography>
            <Avatar alt={name} src={image} />
            <IconButton onClick={generateRandomUser}>
              <RefreshIcon sx={{ color: '#ffffff' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
