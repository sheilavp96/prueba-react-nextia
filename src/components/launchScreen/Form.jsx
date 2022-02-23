import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import './form.css';

const Form = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [button, setButton] = useState(false);
  const [classButton, setClassButton] = useState('');
  const [openModal, setOpenModal] = useState(false);

  // useEffect(() => {
  //   const getUser = async () => {
  //     fetch('https://prueba-api.nextia.mx/api/v1/member/wallets')
  //       .then((res) => {
  //         console.log(res);
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log('error en la api');
  //       });
  //   };
  //   getUser();
  // }, []);
  const emailUser = 'shey@hotmail.com';
  const passUser = 123;

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
    if (email !== emailUser && passUser !== password) {
      console.log('no');
      setOpenModal(true);
    } else {
      console.log('entrar');
      setClassButton('');
      setButton(!button);
      navigate('./dashboard');
    }
    // navigate('./dashboard');
  };

  return (
    <div>
      <form className="form__main-container" onSubmit={handleSubmit}>
        {/* <form> */}
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
      {/* <Modal /> */}
    </div>
  );
};

export default Form;
