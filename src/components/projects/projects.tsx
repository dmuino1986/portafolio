import "./projects.css";
import { ExperienceProjects } from "../../constants/exprecienceProjects";
import ExperienceCard from "../experience/experienceCard";

const Projects = () => {
  const projects = ExperienceProjects;

  return (
    <section id="projects" className="projects">
      <div>
        <h2>Projects</h2>

        {projects.map((project, index) => (
          <ExperienceCard key={index} experience={project} />
        ))}
      </div>
    </section>
  );
};

Projects.displayName = "Projects";

export default Projects;
