import './App.css'
import './Mobile.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import About from './pages/about'
import Admin from './pages/admin'
import Connect from './pages/contact'
import Donate from './pages/donate'
import Home from './pages/home'
import Links from './pages/links'
import Announcements from './pages/announcements'
import Footer from './components/footer'
import CRUD from './pages/crud'
import HomeTop from './components/homeTop'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/links" element={<Links />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/announcement-add-edit-delete" element={<CRUD />} />
      </Routes>
      <HomeTop />
      <Footer />
    </div>
  )
}

export default App
