import { createBrowserRouter, Outlet } from 'react-router-dom'
import QuizPage from 'pages/QuizPage'

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: [
      {
        path: '/quiz/:id',
        element: <QuizPage />,
      },
    ],
  },
])

export default router
