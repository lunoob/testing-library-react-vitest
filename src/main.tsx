import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './pages/Todo'
// import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Todo />
    {/* <App /> */}
  </React.StrictMode>,
)
