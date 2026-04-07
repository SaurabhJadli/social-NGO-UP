import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Education from './pages/ourWork/Education.jsx'
import Health from './pages/ourWork/Health.jsx'
import Environment from './pages/ourWork/Environment.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about-us' element={<About />}></Route>
          <Route path='/contact-us' element={<Contact />}></Route>
          <Route path='/our-work/education' element={<Education />}></Route>
          <Route path='/our-work/health' element={<Health />}></Route>
          <Route path='/our-work/environment' element={<Environment />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
