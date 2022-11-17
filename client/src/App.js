import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Contact from './pages/contact'
import Donate from './pages/donate'
import Home from './pages/home'
import Links from './pages/links'
import Nav from './components/nav'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/links" element={<Links />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
