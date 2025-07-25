import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-card">
        <h3>Interns Management System</h3>
        <p>Built with Rails API and React Frontend</p>
      </div>
      <div className="project-card">
        <h3>Society Management System</h3>
        <p>Complete platform for managing society residents, events, complaints, and bills</p>
      </div>
    </section>
  );
}

export default Projects;
