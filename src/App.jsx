import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoutes from './routes/PublicRoutes';
import './index.css';
import PrivateRoute from './routes/PrivateRoutes';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PublicRoutes />} />
        <Route exact path="/dashboard" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
