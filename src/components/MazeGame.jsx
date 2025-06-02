// src/components/MazeGame.jsx
import { useEffect, useState, useRef } from 'react';
import './MazeGame.css';

const mazeMap = [
  ['#', '#', '#', '#', '#', '#'],
  ['#', 'P', ' ', ' ', ' ', '#'],
  ['#', ' ', '#', '#', ' ', '#'],
  ['#', ' ', '#', ' ', ' ', '#'],
  ['#', ' ', ' ', '#', 'E', '#'],
  ['#', '#', '#', '#', '#', '#']
];

export default function MazeGame({ onComplete }) {
  const [position, setPosition] = useState({ x: 1, y: 1 });
  const [maze, setMaze] = useState([...mazeMap]);
  const touchStartRef = useRef({ x: 0, y: 0 });

  const movePlayer = (direction) => {
    const { x, y } = position;
    let newX = x, newY = y;
    if (direction === 'up') newY--;
    if (direction === 'down') newY++;
    if (direction === 'left') newX--;
    if (direction === 'right') newX++;

    if (mazeMap[newY][newX] !== '#') {
      if (mazeMap[newY][newX] === 'E') {
        onComplete();
      }
      setPosition({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowUp') movePlayer('up');
      if (e.key === 'ArrowDown') movePlayer('down');
      if (e.key === 'ArrowLeft') movePlayer('left');
      if (e.key === 'ArrowRight') movePlayer('right');
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 30) movePlayer('right');
        if (deltaX < -30) movePlayer('left');
      } else {
        // Vertical swipe
        if (deltaY > 30) movePlayer('down');
        if (deltaY < -30) movePlayer('up');
      }
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [position]);

  return (
  <div className="maze-container">
    <div className="maze">
      {mazeMap.map((row, y) => (
        <div key={y} className="maze-row">
          {row.map((cell, x) => {
            const isPlayer = x === position.x && y === position.y;
            return (
              <div key={x} className={`cell ${cell === '#' ? 'wall' : ''}`}>
                {isPlayer && (
                  <img src="/pikachu.gif" alt="Pikachu" className="sprite pikachu" />
                )}
                {cell === 'E' && !isPlayer && (
                  <img src="/pokeball.gif" alt="Pokeball" className="sprite pokeball" />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
    <p className="hint">Usa las flechas del teclado o desliza en pantalla</p>
  </div>
);

}
