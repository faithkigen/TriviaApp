import React, { useState } from 'react';
import './QuestionList.css';

const QuestionList = () => {
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
     {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
    // Add other questions
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (questionIndex, optionId, isCorrect) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedSelectedOptions = [...prevSelectedOptions];
      updatedSelectedOptions[questionIndex] = optionId;
      return updatedSelectedOptions;
    });

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const isOptionSelected = (questionIndex) => {
    return selectedOptions[questionIndex] !== undefined;
  };

  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div className="question-container" key={questionIndex}>
          <h3>{question.text}</h3>
          <ul>
            {question.options.map((option) => (
              <li key={option.id}>
                <label>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={option.id}
                    checked={selectedOptions[questionIndex] === option.id}
                    disabled={isOptionSelected(questionIndex)}
                    onChange={() => handleOptionSelect(questionIndex, option.id, option.isCorrect)}
                  />
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="score-container">
        <h3>Score: {score}</h3>
      </div>
    </div>
  );
};

export default QuestionList;
