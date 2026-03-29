import { Outlet } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Outlet /> 
    <Footer />
 </>
  )
}

export default App
