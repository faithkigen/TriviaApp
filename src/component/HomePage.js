import React from "react";
import { Link } from "react-router-dom";
import questions from './Question';
import categories from './Categories';

const Homepage = () => {
    return (
        <div className="App" >
            <h1>Trivia</h1>
            <p>Mind game.</p>

            <div className="p-16">

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {categories.map((question, index) => (
                        <div class="bg-gray-200 h-48 rounded-lg" style={{ backgroundImage: `url(${question.imageUrl})` }}>
                            <div key={index} className="question">
                                <p>{question.text}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Homepage;