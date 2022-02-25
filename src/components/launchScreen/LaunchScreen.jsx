import React, { useEffect, useState } from 'react';
import Wave from '../wave/Wave';
import Form from './Form';
// import logo from '../../assets/logo.png';
import './launch.css';
import Loading from './Loading';
const LaunchScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="launch__main-container">
      {loading ? <Loading /> : <Wave />}
      {loading ? <Loading /> : <Form />}
      {/* <Wave />
      <Form /> */}

      {/* <Loading /> */}
    </div>
  );
};

export default LaunchScreen;
