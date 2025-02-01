import { forwardRef } from "react";
import "./projects.css";

interface ProjectsProps {
  inView?: boolean; // Example prop, adjust as needed
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  ({ inView }, ref) => {
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
  }
);

export default Projects;
