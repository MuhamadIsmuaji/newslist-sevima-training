import React from 'react';

export const STORAGEKEY = 'newslistsevkey';

export const initializeAuthData = JSON.parse(localStorage.getItem(STORAGEKEY));

export const AppContext = React.createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'NEW_AUTH':
      localStorage.setItem(STORAGEKEY, JSON.stringify(action.payload));
      break;
    case 'REMOVE_AUTH':
      localStorage.removeItem(STORAGEKEY);
      break;
  
    default:
      break;
  }

  state = JSON.parse(localStorage.getItem(STORAGEKEY));
  return state;
}