import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">About Us</h2>
      <div className="split-about">
        {/* Left section */}
        <div className="left-aboutsection">
          {/* content for left section */}
          <div className='about-card'>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaggION2ARStJYdSQt9FOGOlXLd6Nl2C6pPw&usqp=CAU" className='about-img' alt="About Image" /> 
          </div>
        </div>

        {/* Right section */}
        <div className="right-aboutsection">
          {/* content for right section */}
          <div className="about-text">
            <p>Welcome to our trivia section dedicated to testing your knowledge!</p>
            <p>Our team of experts has curated a collection of engaging and challenging questions to put your intellect to the test.</p>
            <p>Whether you consider yourself a novice or an expert in various fields, our trivia questions are designed to cater to a wide range of interests and difficulty levels.</p>
            <p>We believe that learning should be fun and enjoyable, and what better way to do that than through trivia!</p>
            <p>We understand that everyone has a busy schedule, so we offer quick and easy trivia questions that you can answer in under a minute.</p>
            {/* <p>In addition to our trivia questions, we also provide informative articles on various topics to expand your knowledge. Our blog features articles on subjects like history, science, pop culture, and much more.</p> */}
            <p>Thank you for visiting our trivia section!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
  
    