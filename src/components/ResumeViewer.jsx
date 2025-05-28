const ResumeViewer = () => (
  <section className="resume-section" style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f0f0f0' }}>
    <h2>Mi Currículum</h2>
    <object data="/CV.pdf" type="application/pdf" width="80%" height="600px">
      <p>No se pudo mostrar el CV. <a href="/cv.pdf" download>Descargar PDF</a></p>
    </object>
  </section>
);

export default ResumeViewer;
