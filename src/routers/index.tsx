import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom'
// import Login from 'pages/Login'
import localStorageKeys from '@utils/localStorageKeys'
import QuizPage from 'pages/QuizPage'
import Dashboard from 'pages/Dashboard'

interface IProps {
  element: JSX.Element
  redirect: string
}

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
