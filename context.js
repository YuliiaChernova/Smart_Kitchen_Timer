import { createContext } from 'react';

const authContext = createContext({
  currentUser: {},
  setCurrentUser: (auth) => {}
});

export default authContext;
