import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import BreakFast from './componentss/breakfast/breakfast';
import Lunch from './componentss/lunch/lunch';
import Dinner from './componentss/dinner/dinner';
import Signin from './componentss/signin,signup,front/signin';
import Signup from './componentss/signin,signup,front/signup';
import Front from './componentss/signin,signup,front/front';
import Dashboard from './componentss/dashboard/dashboard';
import Bmi from './componentss/BMI/BMI';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Front/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/breakfast" element={<BreakFast/>}/>
      <Route path="/lunch" element={<Lunch/>}/>
      <Route path="/dinner" element={<Dinner/>}/>
      <Route path="/BMI" element={<Bmi/>}/>
      <Route path="/front" element={<Front/>}/>
    </Routes>
    </>
    );
}

export default App;
