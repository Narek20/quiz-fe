import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { UserProvider } from 'contexts/user.context'
import { ToastProvider } from 'contexts/toast.context'
import { THEME } from 'global/MuiTheme'
import App from 'App'

import './index.css'
import { ApolloProvider } from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
      <ToastProvider>
        <UserProvider>
          <ThemeProvider theme={THEME}>
            <App />
          </ThemeProvider>
        </UserProvider>
      </ToastProvider>
  </React.StrictMode>
)
