import React from 'react'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const base = import.meta.env.BASE_URL
  const experiences = [
    {
      company: 'SCIMPLIFY (COCREATE GLOBAL TECHNOLOGIES PVT LTD)',
      position: 'Internship Trainee',
      period: 'Nov 2025 - Present',
      logo: `${base}images/logos/scimplify.png`,
      description: [
        'Assisting in procurement activities and supporting the business development team in their ongoing tasks.',
        'Built an automation which helps in fetching data of suppliers from a website and provide an excel sheet with required data.'
      ],
    },
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item card">
              <div className="experience-header">
                <div className="experience-icon">
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />
                  ) : (
                    <FaBriefcase />
                  )}
                </div>
                <div className="experience-info">
                  <h3 className="experience-position">{exp.position}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

