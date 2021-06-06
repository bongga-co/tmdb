import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { GlobalStyles } from 'presentation/components/GlobalStyles'
import reportWebVitals from './reportWebVitals'

const ROOT_TAG = document.getElementById('root')
const ROOT_APP = (
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)

render(ROOT_APP, ROOT_TAG)
reportWebVitals();