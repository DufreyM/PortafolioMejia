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

const Projects = () => (
  <section>
    <div className="container">
      <h2>Proyectos</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {projects.map((p, i) => (
          <div key={i} style={{ background: '#fff', padding: '1rem', borderRadius: '5px', width: '30%', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p><strong>Tecnologías:</strong> {p.technologies.join(', ')}</p>
            <a href={p.link} target="_blank" rel="noreferrer">Ver proyecto</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
