import './WelcomeScreen.css';
import ParticlesBackground from './ParticlesBackground';

export default function WelcomeScreen({ onContinue }) {
  return (
    <div className="welcome-screen">
      <ParticlesBackground />
      <div className="welcome-box">
        <h1 className="welcome-title">¡Bienvenido a</h1>
        <h1 className="welcome-highlight">Dufrey Portafolio!</h1>
        <button className="continue-btn" onClick={onContinue}>
          Empezar Aventura
        </button>
      </div>
    </div>
  );
}
