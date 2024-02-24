/* eslint-disable no-unused-vars */
// Home.js
import React, { useState, useEffect } from 'react';
import appFirebase from '../fact';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import ImgE from '../assets/ImgE.jpg';
import LoadImg from './LoadImg';

const auth = getAuth(appFirebase);

export const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [newImage, setNewImage] = useState(null);

  // Función para obtener el usuario actual al cargar el componente
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // El usuario está autenticado, establecerlo como usuario actual
        setCurrentUser(user);
      } else {
        // No hay usuario autenticado, establecer currentUser como null
        setCurrentUser(null);
      }
    });

    // Limpiar el efecto cuando el componente se desmonta
    return () => unsubscribe();
  }, []);

  return (
    <div className='container'>
      <div className="card mb-3 cartwo">
        <div className="row g-0 carttree">
          <div className="col-md-4">
            <img src={newImage ? URL.createObjectURL(newImage) : ImgE} alt='' className='tamñoImg' />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Bienvenido {currentUser ? currentUser.email : 'Invitado'}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              {currentUser && <button className='btn btn-outline-danger' onClick={() => signOut(auth)}>Logout</button>}
              <LoadImg currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
