import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { StandardLayout } from 'presentation/layouts'
import { Routes } from 'routes'
import THEME from 'presentation/theme'

export const App = () => (
  <Router>
    <ThemeProvider theme={THEME['light']}>
      <StandardLayout>
        <Routes />
      </StandardLayout>
    </ThemeProvider>
  </Router>
)
