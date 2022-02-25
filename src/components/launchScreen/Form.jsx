import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './form.css';
import { startLogin } from '../../_actions/authActions';

const Form = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [id, setID] = useState();
  const [button, setButton] = useState(false);
  const [classButton, setClassButton] = useState('');
  const [openModal, setOpenModal] = useState(false);
  //l: prueba@nextia.mx
  // PruebaNextia2021
  useEffect(() => {
    if (email && id) {
      setButton(!button);
      setClassButton('btn-disable');
    } else {
      setClassButton('');
    }
  }, [id, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(email, id));
  };

  const handleLogin = () => {
    if (state.authReducer.id) {
      sessionStorage.setItem(
        'userSS',
        JSON.stringify({
          user: {
            email: state.authReducer.email,
            password: state.authReducer.id,
          },
        })
      );
      localStorage.setItem(
        'userSS',
        JSON.stringify({
          user: {
            email: state.authReducer.email,
            password: state.authReducer.id,
          },
        })
      );

      navigate('./dashboard');
    } else if (state.authReducer.id === '') {
      console.log('error');
      setOpenModal(true);
    }
  };

  return (
    <>
      <form className="form__main-container" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={id}
          className="input"
          onChange={(e) => setID(e.target.value)}
        />
        <button
          className={`btn ${classButton}`}
          type="submit"
          onClick={handleLogin}
          disabled={!button}
        >
          Entrar
        </button>
        {openModal && <Modal closeModal={setOpenModal} />}
      </form>
    </>
  );
};

export default Form;
