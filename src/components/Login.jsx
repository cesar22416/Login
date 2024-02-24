/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Img from '../assets/Img.svg';
import fondo from '../assets/fondo.jpg';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appFirebase from '../fact';

const auth = getAuth(appFirebase);
const Login = () => {
  const [registrar, setRegistrar] = useState(false);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contrasena = e.target.password.value;
    
    if (registrar) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contrasena);
      } catch (error) {
        toast.error('Asegúrate de que la contraseña sea correcta');
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contrasena);
      } catch (error) {
        toast.error('El correo o la contraseña son incorrectos');
      }
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        {/* colm mas pequeña*/}
        <div className='col-md-4'>
          <div className='padre'>
            <div className='card card-body'>
              <img src={Img} alt='' className='logo' />
              <form onSubmit={functAutenticacion}>
                <input type='text' placeholder='Ingresar Email' id='email' className='input-group mb-3 input' />
                <input type="password" placeholder="Ingresar Password" id="password" className="input-group mb-3 input" autoComplete="current-password" />
                <button className='btn btn-outline-dark'onClick={registrar ? 'Registrate' : 'Inicia Sesion'}>{registrar ? 'Registrate' : 'Inicia Sesion'}</button>
              </form>
              <h4 className='registro'>
                {registrar ? 'Si ya tienes cuenta' : 'No tienes cuenta'}
                <button className='btn btn-outline-danger' onClick={() => setRegistrar(!registrar)}>
                  {registrar ? 'inicia sesion' : 'Registrate'}
                </button>
                
              </h4>
            </div>
          </div>
        </div>
        {/*colm mas grande*/}
        <div className='col-md-8'>
          <img src={fondo} alt='' className='size-Img' />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
