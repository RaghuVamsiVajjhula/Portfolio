import React from 'react'
import { FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            © {currentYear} Raghu Vamsi Vajjhula 
          </p>
          <p className="footer-note">
            
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

