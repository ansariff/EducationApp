import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Task1.css';

const SmallestNumberGame = () => {
  const [numbers, setNumbers] = useState([]);
  const [result, setResult] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const navigate = useNavigate(); // Get the navigate function here

  useEffect(() => {
    if (gameStarted) {
      startNewSet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionIndex, gameStarted]);

  const startNewSet = () => {
    if (questionIndex === 5) {
      setEndTime(new Date());
      calculateScore();
    } else {
      const newNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
      setNumbers(newNumbers);
      setResult('');
      setShowResult(false);
      setStartTime(new Date());
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toFixed(2);
    return `${minutes} min ${remainingSeconds} seconds`;
  };

  const checkSmallestNumber = (selectedNumber, selectedIndex) => {
    const isSmallest = numbers.every(
      (number, index) => index === selectedIndex || selectedNumber <= number
    );

    if (isSmallest) {
      setResult('YES! You are right!');
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    } else {
      setResult('OOPS! You are wrong.');
    }

    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }, 1000);
  };

  const calculateScore = () => {
    if (endTime) {
      const accuracy = (correctAnswers / 5) * 100;
      setResult(`Game Over! Your score: ${correctAnswers}/5\nAccuracy: ${accuracy.toFixed(0)}%`);
    }
  };

  const restartGame = () => {
    setQuestionIndex(0);
    setResult('');
    setCorrectAnswers(0);
    setStartTime(new Date());
    setEndTime(null);
    setGameStarted(true);
    setShowResult((prev) => !prev);
  };

  const goBack = () => {
    navigate('/dashboard'); // Use navigate here
  };

  return (
    <div className="game-container">
      {!gameStarted && (
        <div className="game-description">
          <h1>Select the Smallest Number</h1>
          <p>
            Test your skills by identifying the smallest number in each set of numbers. Click on
            the number you believe is the smallest. Can you get them all right?
          </p>
        </div>
      )}

      {gameStarted && questionIndex <= 4 && (
        <div>
          <p>Select the smallest number !</p>
          <div className="number-buttons">
            {numbers.map((number, index) => (
              <button key={index} onClick={() => checkSmallestNumber(number, index)}>
                {number}
              </button>
            ))}
          </div>
          <p>{showResult && result}</p>
        </div>
      )}

      {questionIndex === 5 && (
        <div>
          <p>Game Over!</p>
          {endTime && (
            <div>
              <p>Total time: {formatTime((endTime - startTime) / 1000)}</p>
              <p>Your score: {correctAnswers}/5</p>
              <p>Accuracy: {(correctAnswers / 5) * 100}%</p>
            </div>
          )}
          <button onClick={restartGame}>Restart Game</button>
          <button onClick={goBack}>Go Back</button>
        </div>
      )}

      {!gameStarted && (
        <div className="start-button-container">
          <button className="start-button" onClick={restartGame}>
            Start Game
          </button>
        </div>
      )}
    </div>
  );
};

export default SmallestNumberGame;
