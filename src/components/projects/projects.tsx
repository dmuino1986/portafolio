import React from "react";
import "./projects.css";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1.",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Description of Project 2.",
      link: "#",
    },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className={`projects ${inView ? "visible" : ""}`}
    >
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
