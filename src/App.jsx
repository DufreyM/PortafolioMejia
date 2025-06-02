import { useState, useEffect } from 'react';
import HeroIntro from './components/HeroIntro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ResumeViewer from './components/ResumeViewer';
import MazeGame from './components/MazeGame';
import WelcomeScreen from './components/WelcomeScreen';

import './App.css';

function App() {
  const [screen, setScreen] = useState('home');
  const [mazeCompleted, setMazeCompleted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [fallingPikachus, setFallingPikachus] = useState([]);

  const pokemonGifs = [
    '/pikachu.gif',
    '/darkrai.gif',
    '/charizard.gif',
    '/venusaur.gif',
    '/snorlax.gif'
  ];

  const triggerPokemon = () => {
    const id = Date.now();
    const randomGif = pokemonGifs[Math.floor(Math.random() * pokemonGifs.length)];
    const newPokemon = {
      id,
      left: Math.random() * 90 + '%',
      gif: randomGif
    };

    setFallingPikachus(prev => [...prev, newPokemon]);

    setTimeout(() => {
      setFallingPikachus(prev => prev.filter(p => p.id !== id));
    }, 2500);
  };

  // 👇 Esto hace que cada cierto tiempo caiga un Pokémon automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      triggerPokemon();
    }, 5000 + Math.random() * 5000); // entre 5 y 10 segundos

    return () => clearInterval(interval); // Limpieza al desmontar
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return <HeroIntro />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'resume':
        return <ResumeViewer />;
      default:
        return <HeroIntro />;
    }
  };

  if (!mazeCompleted) {
    return <MazeGame onComplete={() => setMazeCompleted(true)} />;
  }

  if (mazeCompleted && !showWelcome) {
    return <WelcomeScreen onContinue={() => setShowWelcome(true)} />;
  }

  return (
    <div className="gameboy-container">
      <div className="particles" />
      <div className="main-section">
        <div className="gameboy-controls side left">
          <button onClick={() => { setScreen('home'); triggerPokemon(); }}>Intro</button>
          <button onClick={() => { setScreen('projects'); triggerPokemon(); }}>Projects</button>
        </div>

        <div className="gameboy-screen">
          {renderScreen()}
          {fallingPikachus.map(p => (
            <img
              key={p.id}
              src={p.gif}
              className="falling-pikachu"
              style={{ left: p.left }}
              alt="Pokemon"
            />
          ))}
        </div>

        <div className="gameboy-controls side right">
          <button onClick={() => { setScreen('skills'); triggerPokemon(); }}>Skills</button>
          <button onClick={() => { setScreen('resume'); triggerPokemon(); }}>Resume</button>
        </div>
      </div>

      <footer className="gameboy-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
