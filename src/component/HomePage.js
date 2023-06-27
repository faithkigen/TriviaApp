import React from "react";
import { Link } from "react-router-dom";
import questions from './Question'

const Homepage = () => {
  return (
    <div className="App">
      <h1>Trivia</h1>
      <p>Mind game.</p>
     

      <div className="question-list">
        {questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question.text}</p>
            <ul>
              {question.options.map((option) => (
                <li key={option.id}>{option.text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;