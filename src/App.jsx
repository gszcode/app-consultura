import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Index } from './pages/Index'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
