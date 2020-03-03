import { Home } from "../pages/Home";
import { Other } from "../pages/Other";
import { Auth } from "../pages/Auth";

export const MainRoutes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: Home
  },
  {
    path: '/other',
    title: 'Other',
    component: Other
  },
  {
    path: '/auth',
    title: 'Auth',
    component: Auth
  },
]