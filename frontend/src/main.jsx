import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import App from './App.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/about-us' element={<About/>}></Route>
      <Route path='/contact-us' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
