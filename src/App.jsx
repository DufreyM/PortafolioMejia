import './App.css';
import HeroIntro from './components/HeroIntro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState('home');

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return <HeroIntro />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'footer':
        return <Footer />;
      default:
        return <HeroIntro />;
    }
  };

  return (
    <div className="gameboy-container">
      <div className="main-section">
        <div className="gameboy-controls side left">
          <button onClick={() => setScreen('home')}>A</button>
          <button onClick={() => setScreen('projects')}>B</button>
        </div>

        <div className="gameboy-screen">
          {renderScreen()}
        </div>

        <div className="gameboy-controls side right">
          <button onClick={() => setScreen('skills')}>Start</button>
          <button onClick={() => setScreen('footer')}>Select</button>
        </div>
      </div>

      <footer className="gameboy-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
