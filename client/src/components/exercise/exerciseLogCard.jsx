import React from 'react';
import './exerciseCss.css';
import axios from 'axios';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';

const ExerciseLogCard = (props) => {
  const navigate = useNavigate();

  function deleteExercise () {
    axios.put('/deleteExercise', { params: {user_id: props.exercise.user_id, exercise_id: props.exercise.exercise_id}})
    .then(data => {
      console.log(data);
      navigate('/')
    })
    .catch(err => {
      if (err) {
        console.log('delete exercise err', err)
      }
    })
  }

  if (props.exercise.exercise_name !== undefined) {
    return (
      <div>
      <div>
        Name - {props.exercise.exercise_name}<br></br>
        Time - {props.exercise.time} mins<br></br>
        <button onClick={deleteExercise}>Delete Exercise</button><br></br>
      </div><br></br>
      </div>
    )
  } else if (props.exercise.calories !== undefined) {
    return (
      <div>
        Calories Burned = {props.exercise.calories}
      </div>
    )
  }
};

export default ExerciseLogCard;