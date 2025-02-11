import React from "react";
import "./skills.css";
import SkillHexagon from "./skillHexagon";

const Skills: React.FC = () => {
  const skills: string[] = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>

        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <SkillHexagon text={skill} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
