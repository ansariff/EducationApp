// Task2.js

import React, { useState, useEffect } from 'react';
import './Task2.css';

const MatchTheColumnGame = () => {
  const [columnA, setColumnA] = useState(['Apple', 'Banana', 'Cherry', 'Grapes']);
  const [columnB, setColumnB] = useState(['Red', 'Yellow', 'Red', 'Purple']);
  const [selectedCellA, setSelectedCellA] = useState(null);
  const [selectedCellB, setSelectedCellB] = useState(null);
  const [correctMatches, setCorrectMatches] = useState([]);

  const handleCellClick = (index, column) => {
    if (column === 'A') {
      setSelectedCellA(index);
    } else if (column === 'B') {
      setSelectedCellB(index);
    }
  };

  const checkMatch = () => {
    if (selectedCellA !== null && selectedCellB !== null) {
      const pairs = {
        'Apple': 'Red',
        'Banana': 'Yellow',
        'Cherry': 'Red',
        'Grapes': 'Purple'
      };

      return pairs[columnA[selectedCellA]] === columnB[selectedCellB];
    }
    return false;
  };

  useEffect(() => {
    if (checkMatch()) {
      setCorrectMatches([...correctMatches, selectedCellA, selectedCellB]);
    }
  }, [selectedCellA, selectedCellB, correctMatches]);

  const resetSelection = () => {
    setSelectedCellA(null);
    setSelectedCellB(null);
  };

  return (
    <div>
      <h2>Match the Columns</h2>
      <div className="grid">
        <div className="column">
          {columnA.map((value, index) => (
            <div
              key={index}
              className={`cell ${selectedCellA === index ? 'selected' : ''}`}
              onClick={() => handleCellClick(index, 'A')}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="column">
          {columnB.map((value, index) => (
            <div
              key={index}
              className={`cell ${selectedCellB === index ? 'selected' : ''} ${correctMatches.includes(index) ? 'correct-match' : ''}`}
              onClick={() => handleCellClick(index, 'B')}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
      {checkMatch() ? (
        <p>Correct Match!</p>
      ) : (
        selectedCellA !== null && selectedCellB !== null && <p>Incorrect Match. Try Again!</p>
      )}
      <button onClick={() => { resetSelection(); setCorrectMatches([]); }}>Reset Selection</button>
    </div>
  );
};

export default MatchTheColumnGame;
