import './App.css'
import Homepage from './pages/Homepage'
import Browsepage from './pages/Browsepage'
import Searchpage from './pages/Searchpage'
import Detailpage from './pages/Detailpage'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<Searchpage />} />
      <Route path="/browse" element={<Browsepage />} />
      <Route path="/anime/:id" element={<Detailpage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App;
