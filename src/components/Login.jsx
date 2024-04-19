/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Img from '../assets/Img.svg';
import fondo from '../assets/fondo.jpg';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appFirebase from '../fact';
import { Link } from 'react-router-dom';


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
          <div className='Fondo container'>
             <Link to="/Welcome"> <img src={Img} alt='' className='logo' /></Link>
              <div className='LoginCard'>
                <p>{registrar ? 'Si ya tienes cuenta' : 'No tienes cuenta'}</p>
              <form onSubmit={functAutenticacion} className='Loginfrom'>
                <input  type='text' placeholder='Ingresar Email' id='email' className="loginInput" />
                <input type="password" placeholder="Ingresar Password" id="password" className="loginInput" autoComplete="current-password" />
                <button className='btn btn-outline-light'onClick={registrar ? 'Registrate' : 'Inicia Sesion'}>{registrar ? 'Registrate' : 'Inicia Sesion'}</button>
                
                <button className='btn btn-outline-light' onClick={() => setRegistrar(!registrar)}>{registrar ? 'inicia sesion' : 'Registrate'}</button>
              </form>
          </div>
    </div>
  );
};

export default Login;
