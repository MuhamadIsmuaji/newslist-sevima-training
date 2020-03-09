import React from 'react';

export const STORAGEKEY = 'newslistsevkey';

export const initializeAuthData = JSON.parse(localStorage.getItem(STORAGEKEY));

export const AppContext = React.createContext();

export const authReducer = (state, action) => {  
  let storageData = JSON.parse(localStorage.getItem(STORAGEKEY));

  switch (action.type) {
    case 'NEW_AUTH':
      storageData = { ...storageData, auth: action.payload };
      localStorage.setItem(STORAGEKEY, JSON.stringify(storageData));
      break;

    case 'EDIT_NEWS':
      storageData = { ...storageData, news: action.payload };
      localStorage.setItem(STORAGEKEY, JSON.stringify(storageData));
      break;

    case 'CANCEL_EDIT_NEWS':
        storageData = { ...storageData, news: undefined };
        localStorage.setItem(STORAGEKEY, JSON.stringify(storageData));
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