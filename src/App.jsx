import { useState } from 'react';
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
  const [emoji, setEmoji] = useState(null);
  const [mazeCompleted, setMazeCompleted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);


  const triggerEmoji = () => {
    const emojis = ['🎉', '🔥', '💻', '🎮', '🚀'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(randomEmoji);
    setTimeout(() => setEmoji(null), 1000);
  };

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
      <div className="main-section">
        <div className="gameboy-controls side left">
          <button onClick={() => { setScreen('home'); triggerEmoji(); }}>Intro</button>
          <button onClick={() => { setScreen('projects'); triggerEmoji(); }}>Projects</button>
        </div>

        <div className="gameboy-screen">
          {renderScreen()}
          {emoji && <div className="falling-emoji">{emoji}</div>}
        </div>

        <div className="gameboy-controls side right">
          <button onClick={() => { setScreen('skills'); triggerEmoji(); }}>Skills</button>
          <button onClick={() => { setScreen('resume'); triggerEmoji(); }}>Resume</button>
        </div>
      </div>

      <footer className="gameboy-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
