import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Donate from './pages/donate'
import Home from './pages/home'
import Links from './pages/links'
import Nav from './components/nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  )
}

export default App
