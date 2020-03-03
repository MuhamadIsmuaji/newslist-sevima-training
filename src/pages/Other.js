import React from 'react';
import { PrivateRoute } from '../components/PrivateRoute';

export const Other = () => {
  return (
    <PrivateRoute path="/other">
      <h1>TEST</h1>
    </PrivateRoute>
  )
}