import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export const AuthRoutes = [
  {
    path: '/auth',
    exact: true,
    title: 'Login',
    component: Login
  },
  {
    path: '/auth/register',
    title: 'Register',
    component: Register
  },
]