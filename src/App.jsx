import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Index } from './pages/Index'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Hiring from './pages/Hiring'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
