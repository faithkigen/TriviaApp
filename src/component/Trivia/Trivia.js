import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Trivia.css';
import { categories } from '../../data/Categories';

const Trivia = () => {


  let {id} = useParams();


  return (
    <div className="category-container">

      <Link to={`/play/${id}`}>
        <button className="play-button">Start</button>
      </Link>
    </div>


  );
};

export default Trivia;