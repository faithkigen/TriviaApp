import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import LandingPage from './component/LandingPage'
import LoginPage from './component/LoginPage'
import RegisterPage from './component/RegisterPage'
import HomePage from './component/HomePage'
import Question from './component/Question'

function App() {
 return (
  <>
  <Router>
      <div>
          <Routes>
              <Route path="/" element={ <LandingPage/> } />
              <Route path="/login" element={ <LoginPage/> } />
              <Route path="/register" element={ <RegisterPage />} />
              <Route path="/home" element={ <HomePage />} />
              <Route path="/question" element={ <Question />} />
      
          </Routes>
      </div>
  </Router>
 
  </>
 );
}
export default App;