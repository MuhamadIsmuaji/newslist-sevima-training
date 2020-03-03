import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLoggedIn } from '../configs/Auth'

export const PrivateRoute = ({ children, path, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => 
        isLoggedIn ? (
          children
        ) : (
          // console.log(path)
          <Redirect to={{ pathname: '/auth', state: { from: location } }}></Redirect>
        )
      }
    ></Route>
  )
}