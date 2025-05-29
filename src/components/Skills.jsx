import './Skills.css';

const skills = [
  { name: "Java", level: 60 },
  { name: "GO", level: 80 },
  { name: "Python", level: 80 },
  { name: "Javascript", level: 40 },
  { name: "Spring Boot", level: 75 },
  { name: "Docker/Kubernets", level: 35 },
  { name: "CSS", level: 70 }
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
