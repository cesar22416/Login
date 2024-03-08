/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import appFirebase from '../fact';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import Perf from '../assets/ImgE.jpg';
import { Link } from 'react-router-dom';
import { NavBar } from './menu/NavBar';
import LogoutButton from '../components/Close'
import Fallower from './Fallower/Fallower';
const auth = getAuth(appFirebase);


export const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Set the image data into state
        setNewImage(e.target.result);
        // Save the image data to localStorage
        localStorage.setItem('userImage', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  return (
      <div className="container Fondo">
        <div className='encabezado'>
          <LogoutButton/>
          <h5 className="card-title"> {currentUser ? currentUser.email : 'Invitado'}</h5> 
          {newImage ? (
            <img src={newImage} alt='' className='avatar' />
          ) : (
            <img src={Perf} alt='' className='avatar' />
          )}
          <button className="btn btn-outline-danger" onClick={openFileUpload} style={{ display: newImage ? 'none' : 'block' }}>+</button>
          <input id="fileInput" type="file" onChange={handleFileChange} style={{ display: 'none' }} />
        </div>

        <div className="HomeUpFollower">
          <h5 className="card-title">Bienvenido {currentUser ? currentUser.email : 'Invitado'}</h5>
          <Link className='btn btn-outline-danger' to='/Exchange'>Buscar amigo</Link>
        </div>
        
          <p className="card-text">This is a wider card with supporting text below as <br/> natural
            lead-in to additional content. <br/>This content is a little bit longer.</p>
          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          <div className='HomeFallowers'>
            <Fallower text={"Followers"} icono={<span className="material-symbols-outlined">person_add</span>}/>
            <Fallower text={"Like"} icono={<span className="material-symbols-outlined">favorite</span>}/>
            <Fallower text={"Followed"} icono={<span className="material-symbols-outlined">groups</span>}/>
          </div>
          
        
        <NavBar/>
      </div>
  );
};

export default Home;
