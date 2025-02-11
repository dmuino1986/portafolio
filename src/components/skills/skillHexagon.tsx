import "./skillHexagon.css";

interface SkillProps {
  text: string;
}

const SkillHexagon = ({ text }: SkillProps) => {
  return (
    <div className="hexagon">
      <div className="hexagon-text">{text}</div>
    </div>
  );
};
export default SkillHexagon;
