import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { More } from './componentsPages/More.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/more',
    element: <More />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
