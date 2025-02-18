import "./skillHexagon.css";

interface SkillProps {
  text: string;
  path: string;
}

const SkillHexagon = ({ text, path }: SkillProps) => {
  return (
    <div className="hexagon">
      <img src={path} alt={text} className="hexagon-text" />
    </div>
  );
};
export default SkillHexagon;
