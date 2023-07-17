import React from 'react';
import { Link } from 'react-router-dom';
import './Trivia.css';
import { categories } from '../../data/Categories';
import question from '../Question/Question';

const Trivia = () => {
  return (
    <div className="category-container">
      <Link to="/question">
        <button className="play-button">Start</button>
      </Link>
    </div>
  );
};

export default Trivia;
