import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import getAllData from './data.js'

const Navigation = lazy(() =>
  import('./routes/navigation')
)
const Home = lazy(() => import('./routes/home'))

const mentors = getAllData.mentors

function App() {
  const [mode, setMode] = React.useState('light')
  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }
  const defaultTheme = createTheme({ palette: { mode } })

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />    
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigation mode={mode} toggleColorMode={toggleColorMode} />}>
            <Route index element={<Home mentors={mentors} />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
