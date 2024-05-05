import { Box } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import router from 'routers'

function App() {
  return (
    <Box className="app">
      <RouterProvider router={router}></RouterProvider>
    </Box>
  )
}

export default App
