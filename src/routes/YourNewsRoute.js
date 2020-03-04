import { YourNewsList } from '../pages/YourNewsList'
import { YourNewsForm } from '../pages/YourNewsForm'

export const YourNewsRoutes = [
  {
    path: '/yournews',
    exact: true,
    title: 'Your News',
    component: YourNewsList
  },
  {
    path: '/yournews/form',
    title: 'Create Your News',
    component: YourNewsForm
  },
  {
    path: '/yournews/form/:id',
    title: 'Update Your News',
    component: YourNewsForm
  },
]