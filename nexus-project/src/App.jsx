import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import Browsepage from './pages/Browsepage'
import Searchpage from './pages/Searchpage'
import Detailpage from './pages/Detailpage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<Searchpage />} />
      <Route path="/browse" element={<Browsepage />} />
      <Route path="/anime/:id" element={<Detailpage />} />
    </Routes>
  )
}

export default App;
