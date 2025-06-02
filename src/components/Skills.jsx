import { useState } from 'react';
import './Skills.css';

const skills = [
  { name: "Java", level: 60, img: "/skills/java.png" },
  { name: "GO", level: 80, img: "/skills/go.jpeg" },
  { name: "Python", level: 80, img: "/skills/python.jpeg" },
  { name: "Javascript", level: 40, img: "/skills/javascript.jpeg" },
  { name: "Spring Boot", level: 75, img: "/skills/spring.png" },
  { name: "Docker/Kubernetes", level: 35, img: "/skills/docker.png" },
  { name: "CSS", level: 50, img: "/skills/css.jpeg" },
];

const Skills = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % skills.length);
  const prev = () => setIndex((index - 1 + skills.length) % skills.length);
  const skill = skills[index];

  return (
    <section className="skills-carousel">
      <h2 className="skills-title">Mis habilidades</h2>
      <div className="carousel-container">
        <button className="nav-button" onClick={prev}>⟨</button>
        <div className="skill-card">
          <div className="skill-image-wrapper">
            <img src={skill.img} alt={skill.name} className="skill-image" />
          </div>
          <h3>{skill.name}</h3>
          <div className="skill-bar-container">
            <div className="skill-bar" style={{ width: `${skill.level}%` }}>
              <span className="skill-bar-text">{skill.level}%</span>
            </div>
          </div>
        </div>
        <button className="nav-button" onClick={next}>⟩</button>
      </div>
    </section>
  );
};

export default Skills;
