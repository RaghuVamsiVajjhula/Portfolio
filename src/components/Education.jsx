import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      period: '2024-2025',
      degree: "Bachelor's in Computer Science (4th year)",
      institution: 'Blekinge Institute of Technology',
      location: 'Karlskrona, Sweden',
      description: 'Completed final year of Bachelor\'s degree with focus on advanced computer science concepts and research methodologies.',
    },
    {
      period: '2021-2024',
      degree: 'B.Tech (1-3 years) in Computer Science and Engineering',
      institution: 'Jawaharlal Nehru Technological University Kakinada',
      location: 'Andhra Pradesh, India',
      description: 'Completed first three years of Bachelor\'s degree with strong foundation in computer science fundamentals.',
    },
  ]

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <span className="education-period">{edu.period}</span>
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-location">{edu.location}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

