import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Vision from './pages/Vision'
import Priorities from './pages/Priorities'
import Leadership from './pages/Leadership'
import Newsletter from './pages/Newsletter'
import About from './pages/About'
import Creative from './pages/Creative'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/priorities" element={<Priorities />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/about" element={<About />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
