/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// LoadImg.js
import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

const LoadImg = ({ currentUser }) => {
  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setNewImage(imageFile);
  };

  const handleImageUpload = async () => {
    if (!newImage) return;

    const storage = getStorage();
    const storageRef = ref(storage, `profile_images/${currentUser.uid}/${newImage.name}`);

    try {
      // Subir la nueva imagen al almacenamiento de Firebase
      await uploadBytes(storageRef, newImage);

      // Obtener la URL de la imagen subida
      const downloadURL = await getDownloadURL(storageRef);

      // Actualizar la URL de la imagen de perfil en Firestore
      const db = getFirestore();
      const userDocRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userDocRef, { profileImageUrl: downloadURL });

      // Limpiar el estado de la nueva imagen
      setNewImage(null);

      alert('¡La imagen de perfil se actualizó correctamente!');
    } catch (error) {
      console.error('Error al actualizar la imagen de perfil:', error);
    }
  };

  return (
    <div>
      <h2>Subir Imagen de Perfil</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Subir Imagen</button>
    </div>
  );
};

export default LoadImg;
