import './Skills.css';

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "APIs", level: 75 },
  { name: "Kotlin", level: 70 },
  { name: "Jetpack Compose", level: 70 }
];

const Skills = () => (
  <section className="skills-section">
    <h2>Habilidades</h2>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <span>{skill.name}</span>
          <div className="skill-bar">
            <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
          </div>
          <span>{skill.level}%</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
