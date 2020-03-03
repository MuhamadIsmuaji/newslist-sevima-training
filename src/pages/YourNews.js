import React, { useContext } from 'react';
import { AuthMiddleware } from '../configs/Middleware';
import { AppContext } from '../configs/Auth';

export const YourNews = () => {
  const {authData} = useContext(AppContext);

  return (
    <AuthMiddleware authData={authData}>
      <h1>TEST</h1>
    </AuthMiddleware>
  )
}