import React, { useState, useEffect } from 'react';
import appFirebase from './fact';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';
import { NavBar } from './menu/NavBar';
import LogoutButton from '../components/Close';
import Fallower from './Fallower/Fallower';
import AvatarComponent from './Avatar/avatar';

import StatusBar from './statusbar/StatusBar';
import Card from './tarjeta/Card';
import Tempo from './ddd/Tempo';
const auth = getAuth(appFirebase);
const storage = getStorage(appFirebase);

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        // Subir la imagen a Firebase Storage
        const storageRef = ref(storage, `userImages/${auth.currentUser.uid}/${file.name}`);
        await uploadBytes(storageRef, file);
        // Obtener la URL de descarga de la imagen
        const downloadURL = await getDownloadURL(storageRef);
        // Actualizar el perfil del usuario con la URL de la imagen
        await updateProfile(auth.currentUser, {
          displayName: auth.currentUser.displayName,
          photoURL: downloadURL
        });
        console.log('Perfil actualizado con éxito');
      } catch (error) {
        console.error('Error al actualizar el perfil:', error);
      }
    }
  };

  const openFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className='Fondo'>
      <StatusBar />  
      <div className='encabezado'>
        <div className='previ fluido'>
          <Tempo/>
          <p>{currentUser ? currentUser.email : 'Invitado'}</p>
                  </div>        
        <div className='fallower fluido'>
          <Fallower text={"Publicaciones"} cantidad={"15"} />
          <Fallower text={"Seguidores"} cantidad={"5"} />
          <Fallower text={"Seguidos"} cantidad={"2"} />
        </div>
      </div>        

      <div className="HomeUpFollower">
        <h5 className="card-title">Bienvenido {currentUser ? currentUser.email : 'Invitado'}</h5>
        <Link className='btn btn-outline-danger' to='/Exchange'>Buscar amigo</Link>
        {currentUser && <LogoutButton />} {/* Renderiza el botón solo si hay un usuario autenticado */}
      </div>

    
      
     
      
      <NavBar />

      {/* Input oculto para la selección de archivos */}
      <input type="file" id="fileInput" onChange={handleFileChange} style={{ display: 'none' }} />
    </div>
  );
};

export default Home;
