import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = () => {
  const categories = [
    {
      id: 1,
      name: 'KENYA',
      description: 'Play the game',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHy3MmiLV56ITwILZyWOT0G0TjVGmHQairQ&usqp=CAU'
    },
    {
      id: 2,
      name: 'UGANDA',
      description: 'You can play',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT68UFkwlAH8a7cC4lCDwmFZWui2YqCAHk3Cw&usqp=CAU'
    },
    {
      id: 3,
      name: 'NIGERIA',
      description: 'You can play',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoVSiqHnS_-7GICdr_DcBlACUqT7M6RUiKCg&usqp=CAU'
    },
    {
      id: 4,
      name: 'GHANA',
      description: 'You can play',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzAn_S2TUW24oo92vRxkWIpKawELHfJgAwA&usqp=CAU'
    },
    {
      id: 5,
      name: 'CONGO',
      description: 'You can play',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpdQ2FdcK4msY8D-I99Dl7juFo4TUbK9feQ&usqp=CAU'
    },
    {
      id: 6,
      name: 'DJIBOUTI',
      description: 'You can play',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUW2u0tfov4qIZxUrCkZYahw-wRHkeXIV5pw&usqp=CAU'
    },
    {
      id: 7,
      name: 'MOROCCO',
      description: 'You can play',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpo3oD2xKEmV__NLbc4-gGuc2wynYL5psnQ&usqp=CAU'
    },
    {
      id: 8,
      name: 'SOUTH AFRICA',
      description: 'You can play',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_l6HGqifAHH3Sr3SgiMBETIrWllkeUudwVg&usqp=CAU'
    },
  ];

  return (
    <div className="category-container">
      {categories.map(category => (
        <div className="category-card" key={category.id}>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          {category.image && (
            <img src={category.image} alt={category.name} className="category-image" />
          )}
          <Link to={`/play/${category.id}`}>
            <button className="play-button">Play</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;