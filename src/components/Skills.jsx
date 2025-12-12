import React from 'react'
import './Skills.css'

const Skills = () => {
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
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card card">
              <h3 className="skill-category">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

