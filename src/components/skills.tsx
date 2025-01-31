import React from "react";
import { useInView } from "react-intersection-observer";

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <section
      ref={ref}
      id="skills"
      className={`skills ${inView ? "visible" : ""}`}
    >
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
