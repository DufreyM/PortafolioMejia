import { useEffect, useState } from 'react';
import pokemons from './pokemonData';
import './WelcomeScreen.css';

export default function WelcomeScreen({ onContinue }) {
  const [currentPokemon, setCurrentPokemon] = useState(pokemons[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = pokemons[Math.floor(Math.random() * pokemons.length)];
      setCurrentPokemon(next);
      document.documentElement.style.setProperty('--color1', next.colors[0]);
      document.documentElement.style.setProperty('--color2', next.colors[1]);
      document.documentElement.style.setProperty('--color3', next.colors[2]);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-screen">
      <div className="pokemon-gifs">
        {pokemons.map((p, i) => (
          <img
            key={i}
            src={p.gif}
            className={`floating-gif ${p.name === currentPokemon.name ? 'active' : ''}`}
            alt={p.name}
          />
        ))}
      </div>
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
