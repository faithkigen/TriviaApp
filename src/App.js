import { useState } from "react";
import About from "./component/LandingPage/About/About";
import Contact from "./component/LandingPage/Contact/Contact";

import LandingPage from "./component/LandingPage/Landing/landingpage";
import Navbar from "./component/LandingPage/Navbar/Navbar";
import Category from "./component/Category/Category";

import Trivia from "./component/Trivia/Trivia";
//import TriviaPage from "./TriviaPage";
import './App.css'


import {Routes, Route} from 'react-router-dom'
import HomePage from "./component/HomePage";
import TriviaPage from "./component/LandingPage/Landing/TriviaPage";
import Question from "./component/Question/QuestionList";
import QuestionList from "./component/Question/QuestionList";

function App() {
  const [token, setToken] = useState([])
  if (!token){
    return<LandingPage setToken={setToken}/>
  }
  console.log(">>>>> token")
  console.log(token)
  return (
    <div className="App">


      <>
        <Navbar />
        <div>
          <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/landingpage" element={<LandingPage/>}/>
                {/* <Route path="/about" element={<About/>}/> */}
                <Route path="/trivia/:id" element={<Trivia/>}/>
                <Route path="/trivias" element={<Category/>} />
                <Route path="/homepage" element={<HomePage/>} />
                <Route path="/triviapage" element={<TriviaPage/>} />
                <Route path="/question" element={<Question/>} />
                <Route path="/questionlist" element={<QuestionList/>} />

                
              
              

            
            </Routes>
        {/* <Footer /> */}
        </div>
         
      </>
    
    </div>
  )
}

export default App
