import { createBrowserRouter, Outlet } from 'react-router-dom'
import QuizPage from 'pages/QuizPage'
import NotFound from 'pages/NotFound'

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: '/quiz/:id',
        element: <QuizPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
