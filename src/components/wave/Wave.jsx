import React from 'react';
import './wave.css';
import logo from '../../assets/logo.png';
const Wave = () => {
  return (
    <div className="wave__element-container" style={{ overflow: 'hidden' }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: '100%', width: '100%' }}
      >
        <path
          d="M-1.41,147.55 C148.14,151.48 250.27,147.55 511.00,52.80 L501.97,-13.30 L0.00,0.00 Z"
          style={{ stroke: 'none', fill: '#EC5056' }}
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
