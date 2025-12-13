import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaGraduationCap } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  // Image path - place your photo in public/images/ directory
  const base = import.meta.env.BASE_URL
  const image = `${base}images/photo1.jpg`

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Raghu Vamsi Vajjhula</span>
            </h1>
            <p className="hero-subtitle">
              Computer Science Graduate
            </p>
            <p className="hero-description">
              I have completed my Bachelor's degree in Computer Science and possess a solid 
              understanding of core concepts. During my studies, I gained foundational knowledge 
              in software development and research methodologies. I also worked in a research paper at Blekinge Institute of Technology (BTH), Sweden, for six months, 
              which culminated in a paper published at IEEE BCCA 2025, Croatia.
            </p>
            <div className="hero-buttons">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('projects')
                }}
              >
                View My Work
              </a>
            </div>
            <div className="hero-social">
              <a
                href="https://www.linkedin.com/in/raghu-vamsi-vajjhula-753416269/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/RaghuVamsiVajjhula"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:vamsivajjhula00000@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://scholar.google.com/citations?user=EMtHeawAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
              >
                <FaGraduationCap />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-carousel">
              <img
                src={image}
                alt="Profile"
                className="carousel-image"
                onError={(e) => {
                  // Fallback if image doesn't exist - show placeholder
                  const placeholder = e.target.nextElementSibling
                  if (placeholder) {
                    e.target.style.display = 'none'
                    placeholder.style.display = 'flex'
                  }
                }}
              />
              <div className="carousel-placeholder">
                <span>RV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

