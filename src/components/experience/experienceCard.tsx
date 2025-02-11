import React from "react";
import { ExperinceProject } from "../../constants/exprecienceProjects";
import "./experienceCard.css";

interface ExperienceCardProps {
  experience: ExperinceProject;
  lastCard: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  lastCard,
}) => {
  return (
    <div className="experience-card">
      {/* Icon */}
      <div className="icon">
        {/* Replace with your icon (e.g., from a library like FontAwesome) */}
        <span>🔹</span>
      </div>

      {/* Vertical Line */}
      <div
        className={!lastCard ? "vertical-line " : "end-line vertical-line"}
      ></div>

      {/* Card Content */}
      <h3>{experience.title}</h3>
      <p>
        {experience.company} - {experience.location}
      </p>
      <p>
        {experience.startDate.toLocaleDateString()} -{" "}
        {experience.endDate.toLocaleDateString()}
      </p>
      <ul>
        {experience.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
