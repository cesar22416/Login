/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Img from '../assets/Img.svg';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appFirebase from './fact';
import { Link } from 'react-router-dom';

const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider(); // Crea una instancia del proveedor de autenticación de Google

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

  const signInWithGoogle = async () => {
    try {
      // Inicia sesión con Google
      await signInWithPopup(auth, provider);
    } catch (error) {
      toast.error('Hubo un error al iniciar sesión con Google. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className='Fondo container'>
      <Link to="/Welcome"><img src={Img} alt='' className='logo' /></Link>
      <div className='LoginCard'>
        <p>{registrar ? 'Si ya tienes cuenta' : 'No tienes cuenta'}</p>
        <form onSubmit={functAutenticacion} className='Loginfrom'>
          <input type='text' placeholder='Ingresar Email' id='email' className="loginInput" />
          <input type="password" placeholder="Ingresar Password" id="password" className="loginInput" autoComplete="current-password" />
          <button className='btn btn-outline-light'>{registrar ? 'Registrate' : 'Inicia Sesion'}</button>
          <button className='btn btn-outline-light' onClick={() => setRegistrar(!registrar)}>{registrar ? 'inicia sesion' : 'Registrate'}</button>
          <button className='btn btn-outline-light' onClick={signInWithGoogle}>Inicia sesión con Google</button> {/* Agrega el botón para iniciar sesión con Google */}
        </form>
      </div>
    </div>
  );
};

export default Login;
