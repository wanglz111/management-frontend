import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'

import '@/assets/style/global.scss'
// import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './store'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  </Provider>
)
