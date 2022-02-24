import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import { useDatosUser } from '../redux/action/userAction';
import './form.css';

const Form = () => {
  const { setDatosUser } = useDatosUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [button, setButton] = useState(false);
  const [classButton, setClassButton] = useState('');
  const [openModal, setOpenModal] = useState(false);
  //l: prueba@nextia.mx
  // PruebaNextia2021
  useEffect(() => {
    if (email && password) {
      setButton(!button);
      setClassButton('btn-disable');
    } else {
      setButton(!button);
      setClassButton('');
    }
  }, [password]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLogin = () => {
    let url = 'https://qa-api.socioinfonavit.com/api/v1/login';
    let jsonData = {
      user: {
        email: email,
        password: password,
      },
    };
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData),
    };
    fetch(url, request)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        setDatosUser(data);
        if (data?.error) {
          setOpenModal(true);
          setClassButton('');
        } else {
          sessionStorage.setItem('userSS', JSON.stringify(jsonData));
          navigate('./dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          className="input"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
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
