import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>
        my <span style={{ color: "#D2042D" }}>projects</span>
      </h2>
      <div className="projects-grid">
        {/* Add your project cards here */}
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of project 1</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of project 2</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
