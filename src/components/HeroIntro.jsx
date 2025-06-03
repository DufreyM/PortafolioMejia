import React, { useState } from 'react';
import './Hero.css'; 
import perfil from '../assets/foto.jpg'; 
import videoPerfil from '../assets/video.mp4'; // agrega aquí el video que quieras usar

const HeroIntro = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="hero">
      <div className="hero-bg-overlay" />
      <div className="hero-container">
        {!showVideo ? (
          <img
            src={perfil}
            alt="Foto de perfil"
            className="hero-img"
            onClick={() => setShowVideo(true)}
            style={{ cursor: 'pointer' }}
            title="Haz clic para reproducir el video"
          />
        ) : (
          <video
            className="hero-img"
            src={videoPerfil}
            autoPlay
            loop
            onClick={() => setShowVideo(false)} // para volver a la imagen si se quiere
            style={{ cursor: 'pointer' }}
            title="Haz clic para volver a la imagen"
          />
        )}

        <h1 className="hero-name">Leonardo Mejía</h1>
        <p>
          Soy un desarrollador backend Jr. con una sólida formación académica en Ingeniería en Ciencia de la Computación y Tecnologías de la Información por la Universidad del Valle de Guatemala. 
        </p>
        <p>
          Actualmente me desempeño en Tribal World Wide, donde me especializo en desarrollo backend con Go, fortaleciendo mi lógica de programación y ampliando mis habilidades técnicas en un entorno profesional real. 
        </p>
      </div>
    </section>
  );
};

export default HeroIntro;
