import { createBrowserRouter } from "react-router-dom";
import { Home, Detail, NotFound, Destination, Order, Finish, } from '@/pages'
import Layout from '@/components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail/:id',
        element: <Detail />
      },
      {
        path: '/Destination/:city',
        element: <Destination />
      },
      {
        path: '/Order',
        element: <Order />
      },
      {
        path: '/Finish',
        element: <Finish />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default router