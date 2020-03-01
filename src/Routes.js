import { Home } from "./pages/Home";
import { Other } from "./pages/Other";

export const routes = [
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
]