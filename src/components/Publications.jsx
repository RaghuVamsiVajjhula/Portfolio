import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import './Publications.css'

const Publications = () => {
  const publications = [
    {
      title: 'A Comparative Study of Federated Learning Methods for Human Activity Recognition',
      conference: 'IEEE BCCA 2025 (Special Track) Conference',
      location: 'Croatia',
      description:
        'This paper presents a comprehensive comparison of various federated learning approaches for human activity recognition, published as part of my research work at Blekinge Institute of Technology.',
    },
  ]

  return (
    <section id="publications" className="section publications">
      <div className="container">
        <h2 className="section-title">Paper Publications</h2>
        <div className="publications-list">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item card">
              <div className="publication-header">
                <div className="publication-icon">
                  <FaFileAlt />
                </div>
                <div className="publication-info">
                  <h3 className="publication-title">{pub.title}</h3>
                  <div className="publication-meta">
                    <span className="publication-conference">{pub.conference}</span>
                    <span className="publication-location">{pub.location}</span>
                  </div>
                </div>
              </div>
              <p className="publication-description">{pub.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications

