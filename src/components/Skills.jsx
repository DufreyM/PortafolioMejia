const skills = ["HTML", "CSS", "JavaScript", "React", "APIs", "Kotlin", "Jetpack Compose"];

const Skills = () => (
  <section style={{ backgroundColor: '#e8f0fe' }}>
    <div className="container">
      <h2>Habilidades</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {skills.map((skill, i) => (
          <li key={i} style={{ marginBottom: '0.5rem' }}>✅ {skill}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
