import React, { useState } from 'react';
import './QuestionList.css';

const QuestionList = () => {
  const countries = [ 'America', 'Kenya', 'Canada', 'Dubai']; // Add more countries as needed

  const questionsByCountry = {
    America : [
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
      
    ],
    Canada: [
      {
        text: "What is the capital of Canada?",
        options:[
        {id:0, text: "Kenya", isCorrect: false},
        {id:1, text: "Canada", isCorrect: true},
        {id:2, text: "Belgium", isCorrect: false},
        {id:3, text: "Flax", isCorrect: false}


        ],
      },
      {
        text: "Which of the following is the logo of Canada?",
        options: [
          {id:0, text: "Canabbis", isCorrect: true},
          {id:1, text: "Bhang", isCorrect: false},
          {id:2, text: "Mirra", isCorrect: false},
          {id:3, text: "Satuva", isCorrect: false}
          
        ],
      },
  
    ],
    Kenya: [
      {
        text: "What is the capital of Kenya?",
        options: [
          {id:0, text: "Elgeiyo Marakwet", isCorrect: false},
          {id:1, text: "Uasingishu", isCorrect: false},
          {id:2, text: "Nairobi", isCorrect: true},
          {id:3, text: "Nakuru", isCorrect: false}
        ],
      },
      {
        text: "Which of the following cities is the largest in Kenya?",
        options: [
          {id:0, text: "Elgeiyo Marakwet", isCorrect: false},
          {id:1, text: "Uasingishu", isCorrect: false},
          {id:2, text: "Nairobi", isCorrect: true},
          {id:3, text: "Nakuru", isCorrect: false}
        ],
      },
  
  
    ],
  };
  



  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null);

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

  const handleNextQuestion = () => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedSelectedOptions = [...prevSelectedOptions];
      updatedSelectedOptions[currentQuestionIndex] = undefined;
      return updatedSelectedOptions;
    });

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleRedoQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setScore(0);
  };
  const handleSelectAnotherCountry = () => {
    setSelectedCountry(null); 
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setScore(0);
  }

  return (
    <div>
      {!selectedCountry ? (
        <div>
          <h3>Please select a country:</h3>
          <ul>
            {countries.map((country) => (
              <li key={country}>
                <button onClick={() => setSelectedCountry(country)}>{country}</button>
              </li>
            ))}
          </ul>
        </div>
      ) : currentQuestionIndex < questionsByCountry[selectedCountry].length ? (
        <div className="question-container" key={currentQuestionIndex}>
          <h3>{questionsByCountry[selectedCountry][currentQuestionIndex].text}</h3>
          <ul>
            {questionsByCountry[selectedCountry][currentQuestionIndex].options.map((option) => (
              <li key={option.id}>
                <label>
                <input
  type="radio"
  name={`question-${selectedCountry}-${currentQuestionIndex}`}
  value={option.id}
  checked={selectedOptions[currentQuestionIndex] === option.id}
  disabled={isOptionSelected(currentQuestionIndex)}
  onChange={() =>
    handleOptionSelect(
      currentQuestionIndex,
      option.id,
      option.isCorrect
    )
  }
/>

                  {option.text}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion} disabled={!isOptionSelected(currentQuestionIndex)}>
            Next
          </button>
        </div>
      ) : (
        <div className="score-container">
          <h3>
            Quiz Completed! Your Score: {score} out of{' '}
            {questionsByCountry[selectedCountry].length} Job well done!
          </h3>
          <button onClick={handleRedoQuiz}>Redo Quiz</button>
          <button onClick={handleSelectAnotherCountry}>Select Another Country</button>
        
        </div>
      )}
    </div>
  );
};

export default QuestionList;
