import React from 'react';
import Wave from '../wave/Wave';
import Form from './Form';
import logo from '../../assets/logo.png';
import './launch.css';
const LaunchScreen = () => {
  return (
    <div className="launch__main-container">
      {/* <img src={logo} className="logo" /> */}
      <Wave />
      <Form />
    </div>
  );
};

export default LaunchScreen;
