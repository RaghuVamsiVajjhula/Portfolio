import React, { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronLeft, FaChevronRight, FaGraduationCap } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Image paths - place your photos in public/images/ directory
  // Any of these files that exist in public/images/ will show; others fall back to placeholder
  const base = import.meta.env.BASE_URL
  const images = [
    `${base}images/photo1.jpg`,
    `${base}images/photo2.jpg`,
    `${base}images/photo3.jpg`,
    `${base}images/photo4.jpg`,
    `${base}images/photo5.jpg`,
    `${base}images/photo6.jpg`,
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

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
                src={images[currentImageIndex]}
                alt={`Profile ${currentImageIndex + 1}`}
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
              <button className="carousel-btn carousel-btn-prev" onClick={prevImage} aria-label="Previous image">
                <FaChevronLeft />
              </button>
              <button className="carousel-btn carousel-btn-next" onClick={nextImage} aria-label="Next image">
                <FaChevronRight />
              </button>
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

