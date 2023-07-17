import React from 'react';
import { useNavigate } from 'react-router-dom';

function TriviaPage() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/trivias');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Trivia Page</h1>
      <p style={styles.text}>
        This page provides information and quizzes about trivia. Trivia is a form of entertainment that challenges your
        knowledge in various subjects. It can include questions about history, science, sports, pop culture, and more.
        Test your knowledge and have fun with trivia quizzes!
      </p>
      {/* Add more content and components related to trivia */}
      <button style={styles.button} onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
}

export default TriviaPage;

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  text: {
    fontSize: '18px',
    color: 'black',
    marginBottom: '30px',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'block',
    margin: '0 auto',
  },
};
