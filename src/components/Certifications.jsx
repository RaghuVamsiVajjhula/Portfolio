import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      title: 'SAP Certified Associate - SAP S/4HANA Cloud Private Edition, Sourcing and Procurement',
      issuer: 'SAP',
    },
    {
      title: 'Python Essential Training',
      issuer: 'LinkedIn Learning',
    },
  ]

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-item card">
              <div className="certification-icon">
                <FaCertificate />
              </div>
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

