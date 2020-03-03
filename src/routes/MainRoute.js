import { Home } from "../pages/Home";
import { YourNews } from "../pages/YourNews";
import { Auth } from "../pages/Auth";

export const MainRoutes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: Home
  },
  {
    path: '/yournews',
    title: 'Your News',
    component: YourNews
  },
  {
    path: '/auth',
    title: 'Auth',
    component: Auth
  },
]