import { createBrowserRouter } from "react-router-dom";
import { Home, Detail, NotFound, Destination, Order, Finish, Map} from '@/pages'
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
        path: '/destination/:city',
        element: <Destination />
      },
      {
        path: '/order',
        element: <Order />
      },
      {
        path: '/finish',
        element: <Finish />
      },
      {
        path: '/map',
        element: <Map />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default router