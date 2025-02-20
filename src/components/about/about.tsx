import { useInView } from "react-intersection-observer";
import { AboutText } from "../../constants/about";
import { skills } from "../../constants/skills";
import SkillHexagon from "../skills/skillHexagon";
import TypingAnimation from "../TypingAnimation/typeAnimation";
import "./about.css";
import "../skills/skills.css";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <section id="about" className="about">
      <div className="panel">
        <div className="panel-content">
          <div className="avatar-container">
            <img className="avatar" alt="avatar" src="assets/avatar.svg" />
            <div className="headline">
              <h3>
                Hi, I'm <span className="headline-name">Darien</span>
              </h3>
            </div>
          </div>
          <p className="about-text">{AboutText}</p>
        </div>
        <div className="panel-content">
          <div className="typing-skills">
            <span style={{ fontSize: "1.2rem", padding: ".2em" }}>
              Experinced in use of{" "}
            </span>
            <span> </span>
            <TypingAnimation
              ref={ref}
              inView={inView}
              textList={skills.map((s) => s.text)}
              delay={200}
            />
          </div>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>
                <SkillHexagon text={skill.text} path={skill.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default About;
