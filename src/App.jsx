import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Homepage from './components/Homepage.jsx'
import AboutMe from './components/AboutMe.jsx'
import AboutMe2 from './components/AboutMe2.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import Interests from './components/Interests.jsx'
import ContactMe from './components/ContactMe.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<AboutMe2/>}/>
      <Route path="/projects" element={<ProjectsPage/>}/>
      <Route path="/interests" element={<Interests/>}/>
      <Route path="/contact" element={<ContactMe/>}/>
    </Routes>
  )
}

export default App
