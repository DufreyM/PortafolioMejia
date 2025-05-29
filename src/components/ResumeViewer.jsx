const ResumeViewer = () => (
  <div className="resume-container">
    <h2 className="resume-title">📄 Mi Currículum</h2>
    <object
      data="/CV.pdf"
      type="application/pdf"
      className="resume-pdf"
    >
      <div className="resume-fallback">
        <p>No se pudo mostrar el CV.</p>
        <a className="resume-download-button" href="/CV.pdf" download>
          Descargar PDF
        </a>
      </div>
    </object>
  </div>
);

export default ResumeViewer;
