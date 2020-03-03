import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const AuthMiddleware = ({ children, authData, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => 
        authData ? (
          children
        ) : (
          <Redirect to={{ pathname: '/auth', state: { from: path } }}></Redirect>
        )
      }
    ></Route>
  )
}

export const AlreadyLoggedInMiddleware = ({ children, authData, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => 
        !authData ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: path } }}></Redirect>
        )
      }
    ></Route>
  )
}