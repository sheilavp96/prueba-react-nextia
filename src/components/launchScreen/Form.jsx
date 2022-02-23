import React from 'react';
import './form.css';

const Form = () => {
  const handleLogin = () => {
    console.log('login');
  };
  return (
    <div className="form__main-container">
      {/* <form> */}
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="input"
        name="email"
        autoComplete="off"
      />
      <input
        type="password"
        placeholder="password"
        className="input"
        name="password"
      />
      <button className="btn" type="submit" onClick={handleLogin}>
        Entrar
      </button>
      {/* </form> */}
    </div>
  );
};

export default Form;
