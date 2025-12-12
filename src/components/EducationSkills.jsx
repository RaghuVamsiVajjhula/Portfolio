import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import './EducationSkills.css'

const EducationSkills = () => {
  const education = [
    {
      period: '2024-2025',
      degree: "Bachelor's in Computer Science (4th year)",
      institution: 'Blekinge Institute of Technology',
      location: 'Karlskrona, Sweden',
      logo: '/images/logos/bth.png',
      description: 'Completed final year of Bachelor\'s degree with focus on advanced computer science concepts and research methodologies.',
    },
    {
      period: '2021-2024',
      degree: 'B.Tech (1-3 years) in Computer Science and Engineering',
      institution: 'Jawaharlal Nehru Technological University Kakinada',
      location: 'Andhra Pradesh, India',
      logo: '/images/logos/jntuk.png',
      description: 'Completed first three years of Bachelor\'s degree with strong foundation in computer science fundamentals.',
    },
  ]

  const skillCategories = [
    {
      title: 'SAP',
      skills: ['Material Management'],
    },
    {
      title: 'Cloud',
      skills: ['AWS'],
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React (Basics)'],
    },
    {
      title: 'Machine Learning',
      skills: ['Python', 'Pandas', 'NumPy', 'TensorFlow'],
    },
    {
      title: 'Federated Learning',
      skills: ['Flower'],
    },
    {
      title: 'Mobile Application Dev',
      skills: ['Flutter'],
    },
    {
      title: 'Misc.',
      skills: [
        'Academic Research',
        'Git',
        'Word',
        'PowerPoint',
        'Excel',
        'Business Development',
      ],
    },
  ]

  return (
    <section id="education-skills" className="section education-skills">
      <div className="container">
        <h2 className="section-title">Education & Skills</h2>
        <div className="education-skills-content">
          <div className="education-section">
            <h3 className="subsection-title">Education</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-icon">
                    {edu.logo ? (
                      <img src={edu.logo} alt={`${edu.institution} logo`} className="education-logo" />
                    ) : (
                      <FaGraduationCap />
                    )}
                  </div>
                  <div className="education-content">
                    <span className="education-period">{edu.period}</span>
                    <h4 className="education-degree">{edu.degree}</h4>
                    <h5 className="education-institution">{edu.institution}</h5>
                    <p className="education-location">{edu.location}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="divider"></div>
          
          <div className="skills-section">
            <h3 className="subsection-title">Skills</h3>
            <div className="skill-lines">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-line card">
                  <span className="skill-line-title">{category.title}:</span>
                  <span className="skill-line-values">
                    {category.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSkills

