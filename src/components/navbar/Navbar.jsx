import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import open from '../../assets/open.png';
import { useDispatch } from 'react-redux';
// import logOutReducer from '../../_reducers/logOutReducer';
import logOutAction from '../../_actions/logOutAction';
import './navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const openFunction = () => {
    console.log('open');
    setOpenModal(!openModal);
  };
  const openCloseFunction = () => {
    console.log('close');
    setOpenCloseModal(!openCloseModal); //true
  };
  const backFunction = () => {
    setOpenCloseModal(!openCloseModal); //false
  };
  const logOutFunction = () => {
    console.log('backkk login');
    // dispatch(loginAction.login({ email, password }));
    dispatch(logOutAction.log());
    navigate('/');
  };
  return (
    <>
      <div className="navbar__container">
        <img src={logo} className="navbar__logo" />
        <div className="navbar__modal">
          <h3 className="navbar__title">Bienvenido</h3>
          <button className="navbar__logout" onClick={logOutFunction}>
            Cerrar sesión
          </button>
        </div>
        <button className="navbar__open" onClick={openFunction}>
          <img src={open} className="navbar__open-image" />
        </button>
      </div>
      {openModal && (
        <div className="dropDown__container">
          <p>Bienvenido</p>
          <button onClick={openCloseFunction} className="btn-session">
            Cerrar sesion
          </button>
        </div>
      )}
      {openCloseModal && (
        <div className="modal__session-container">
          <div className="modal__session">
            <p className="modal__session-text">¿Esta seguro de cerrar sesion?</p>
            <div className="buttons__session">
              <button className="btn__ok btn__session" onClick={backFunction}>
                Regresar
              </button>
              <button className="btn__close btn__session" onClick={logOutFunction}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
