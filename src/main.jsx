import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { More } from './componentsPages/More.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/more" element={<More/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
