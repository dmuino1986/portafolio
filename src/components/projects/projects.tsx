import "./projects.css";
import { ExperienceProjects } from "../../constants/exprecienceProjects";
import ExperienceCard from "../experience/experienceCard";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projects = ExperienceProjects;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className={`${inView ? "slide-in-left" : ""}`}>
        <h2 className={`${inView ? "section-title" : ""}`}>Projects</h2>

        {projects.map((project, index) => (
          <ExperienceCard
            key={index}
            experience={project}
            lastCard={index === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

Projects.displayName = "Projects";

export default Projects;
