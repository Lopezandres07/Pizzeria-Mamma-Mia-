import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PizzaProvider from './context/PizzaProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PizzaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PizzaProvider>
  </React.StrictMode>
)
