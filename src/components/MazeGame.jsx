// src/components/MazeGame.jsx
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleKey = (e) => {
      const { x, y } = position;
      let newX = x, newY = y;
      if (e.key === 'ArrowUp') newY--;
      if (e.key === 'ArrowDown') newY++;
      if (e.key === 'ArrowLeft') newX--;
      if (e.key === 'ArrowRight') newX++;

      if (mazeMap[newY][newX] !== '#') {
        if (mazeMap[newY][newX] === 'E') {
          onComplete();
        }
        setPosition({ x: newX, y: newY });
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [position, onComplete]);

  return (
    <div className="maze">
      {mazeMap.map((row, y) => (
        <div key={y} className="maze-row">
          {row.map((cell, x) => {
            let className = 'cell';
            if (cell === '#') className += ' wall';
            if (x === position.x && y === position.y) className += ' player';
            if (cell === 'E') className += ' exit';
            return <div key={x} className={className}></div>;
          })}
        </div>
      ))}
      <p className="hint">Usa las flechas del teclado para llegar a la salida (E)</p>
    </div>
  );
}
