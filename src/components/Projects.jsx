import React, { useState, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    title: "Introducción a React (CDN)",
    description: "Uso básico de React sin herramientas de build: componentes, JSX, useState y props.",
    technologies: ["React", "CDN", "HTML"],
    link: "https://introducci-n-react.vercel.app/",
  },
  {
    title: "E-Commerce Web",
    description: "Simula una tienda online con carrito, productos, descuentos, favoritos y límites.",
    technologies: ["React", "JavaScript", "CSS", "Node.js", "GitHub"],
    link: "https://ecommerceweb-azure.vercel.app/",
  },
  {
    title: "Optimización con useMemo",
    description: "Demostración de optimización de rendimiento con cálculos pesados usando useMemo.",
    technologies: ["React", "useMemo", "Hooks"],
    link: "https://usememoportafolio.vercel.app/",
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

  // ⌨️ Manejo de flechas del teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
          </div>
          <div className="card-face back">
            <p>¿Quieres verlo en acción?</p>
            <a href={projects[index].link} target="_blank" rel="noreferrer">Ver proyecto</a>
          </div>
        </div>

        <button className="nav-btn right" onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
};

export default Projects;
