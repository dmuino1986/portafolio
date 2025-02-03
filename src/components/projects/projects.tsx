import React, { forwardRef } from 'react';
import './projects.css';

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;