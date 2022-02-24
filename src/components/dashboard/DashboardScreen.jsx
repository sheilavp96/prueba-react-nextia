import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../navbar/Navbar';

const DashboardScreen = () => {
  const datosUser = useSelector((state) => state.datosUser);
  console.log(datosUser);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default DashboardScreen;
