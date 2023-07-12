import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
import { categories } from '../../data/Categories';

const Category = () => {


  return (
    <div className="category-container">
      {categories.map(category => (
        <div className="category-card" key={category.id}>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          {category.image && (
            <img src={category.image} alt={category.name} className="category-image" />
          )}
          <Link to={`/trivia/${category.id}`}>
            <button className="play-button">Play</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;