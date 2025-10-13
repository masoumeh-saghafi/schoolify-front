import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from '@schoolify/app/router'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@schoolify/core/style/themes/muiTheme'
import CssBaseline from '@mui/material/CssBaseline'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
