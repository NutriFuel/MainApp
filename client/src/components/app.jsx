import ReactDOM from 'react-dom';
import React from 'react';
import Login from './Login/Login.jsx';
import ExerciseMain from './Exercise/Exercise.jsx';
import Nutrition from './Nutrition/Nutrition.jsx';
import Profile from './Profile/Profile.jsx';

const App = () => {

  return (
    <div>
      <h1>This is my React app!</h1>;
      <Login />
      <ExerciseMain />
      <Nutrition />
      <Profile />
    </div>
  )
}

export default App;