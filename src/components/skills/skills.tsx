import React from "react";
import "./skills.css";
import SkillHexagon from "./skillHexagon";
import { skills } from "../../constants/skills";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>

        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <SkillHexagon text={skill.text} path={skill.path} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
