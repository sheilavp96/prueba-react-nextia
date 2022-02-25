import React from 'react';
import logo from '../../assets/logo.png';
import loading from './loading.css';
import 'animate.css';
const Loading = () => {
  return (
    <div className="loading__container">
      <img src={logo} className="animate__animated  animate__fadeIn  logo-image" />
    </div>
  );
};

export default Loading;
