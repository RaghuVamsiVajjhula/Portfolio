import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import EducationSkills from './components/EducationSkills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Publications from './components/Publications'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <EducationSkills />
        <Experience />
        <Certifications />
        <Publications />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App

