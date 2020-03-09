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
    path: '/yournews/create',
    title: 'Create Your News',
    component: YourNewsForm
  },
  {
    path: '/yournews/edit/:id',
    title: 'Update Your News',
    component: YourNewsForm
  },
]