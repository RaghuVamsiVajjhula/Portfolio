import React from 'react'
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'HAR using Federated Learning',
      description:
        'We took a real HAR dataset and implemented comparative analysis in FedAvg, FedProx, Krum. Also poisoned data and implemented security mechanism like Differential privacy with different ratios and gathered results.',
      technologies: ['Federated Learning', 'FedAvg', 'FedProx', 'Krum', 'Differential Privacy', 'Python', 'Machine Learning'],
    },
    {
      title: 'Hand Gesture Recognition',
      description:
        'Developed a hand gesture recognition system using MobileNet v3. It focused on detecting hand gestures and classify them using a lightweight deep learning architecture.',
      technologies: ['Python', 'TensorFlow', 'MobileNet v3', 'Deep Learning'],
    },
    {
      title: 'Empower Village',
      description:
        'Contributed to building a website for a UK-based startup to showcase their services and offerings. Assisted in developing and designing the platform to effectively represent the company\'s ideas and value proposition.',
      technologies: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Travel Journal Application',
      description:
        'Built an application using Flutter which works as a travel diary. Some features include adding images, location (Manually or can be detected using GPS sensor) and switching to light mode and dark mode.',
      technologies: ['Flutter', 'Mobile Development', 'GPS', 'UI/UX'],
    },
    {
      title: 'SAP-MM',
      description:
        'Created a procurement scenario and implemented it on an SAP practice server to understand the end-to-end process. Configured key components of the system and gained hands-on experience with core concepts such as subcontracting, vendor evaluation, posting goods receipts, and managing consignments.',
      technologies: ['SAP', 'Material Management', 'Procurement'],
    },
  ]

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-header">
                <FaCode className="project-icon" />
                <h3 className="project-title">{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <FaExternalLinkAlt />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

