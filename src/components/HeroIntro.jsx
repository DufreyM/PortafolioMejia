import './Hero.css';
import perfil from '../assets/perfil.png'; // Asegúrate de tener esta imagen

const HeroIntro = () => (
  <section className="hero">
    <div className="hero-container">
      <img src={perfil} alt="Foto de perfil" className="hero-img" />
      <h1 className="hero-name">Leonardo Mejía</h1>
      <p>Soy desarrollador backend con inclinaciones al frontend cuando no queda de otra.</p>
    </div>
  </section>
);

export default HeroIntro;
