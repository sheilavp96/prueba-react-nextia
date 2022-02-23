import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';

const Form = () => {
  // const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formState;

  useEffect(() => {
    console.log('no te dispares');
  }, []);
  const handleLogin = () => {
    // navigate('/home');
    console.log('logiiin');
  };

  const handleInputChange = ({ target }) => {
    console.log(target.name);
    console.log(target.value);
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <div className="form__main-container">
      {/* <form> */}
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        name="email"
        // value={email}
        className="input"
        autoComplete="off"
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        className="input"
        onChange={handleInputChange}
      />
      <button className="btn" type="submit" onClick={handleLogin}>
        Entrar
      </button>
      {/* </form> */}
    </div>
  );
};

export default Form;
