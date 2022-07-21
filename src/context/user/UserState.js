import { useEffect, useState } from 'react';
import users from '../../data/users';
import UserContext from './UserContext';

const UserState = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(users[0]);

  useEffect(() => {
    generateRandomUser();
  }, []);

  const generateRandomUser = () => {
    const randomNumber = Math.floor(Math.random() * users.length);
    setCurrentUser(users[randomNumber]);
  };

  const value = { currentUser, generateRandomUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserState;
