import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Simulación de Epidemias",
    description: "Modelo de propagación de enfermedades usando gráficas.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/leome/simulacion-epidemias",
  },
  {
    title: "App de Recetas",
    description: "Explora recetas, ingredientes y detalles con Jetpack Compose.",
    technologies: ["Kotlin", "Jetpack Compose"],
    link: "https://github.com/leome/app-recetas",
  },
  {
    title: "Campana de Franklin",
    description: "Proyecto físico-electrónico experimental.",
    technologies: ["Arduino", "Electrónica"],
    link: "https://github.com/leome/campana-franklin",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-section">
      <h2>Proyectos</h2>
      <div className="carousel">
        <button className="nav-btn left" onClick={handlePrev}>&lt;</button>
        
        <div
          className={`project-card-flip ${flipped ? 'flipped' : ''}`}
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
        >
          <div className="card-face front">
            <h3>{projects[index].title}</h3>
            <p>{projects[index].description}</p>
            <p><strong>Tecnologías:</strong> {projects[index].technologies.join(', ')}</p>
            <a href={projects[index].link} target="_blank" rel="noreferrer">Ver proyecto</a>
          </div>
          <div className="card-face back">
            <p>Próximamente</p>
          </div>
        </div>

        <button className="nav-btn right" onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
};

export default Projects;
