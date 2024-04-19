import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

function AvatarComponent() {
  const [avatarSrc, setAvatarSrc] = useState("/ruta/de/la/imagen.jpg"); // Ruta de la imagen por defecto

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setAvatarSrc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <label htmlFor="contained-button-file">
        <Avatar
          alt="Nombre del usuario"
          src={avatarSrc}
          sx={{
            width: 70,
            height: 70,
            borderRadius: '50%',
          }}
        />
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <IconButton
          aria-label="Actualizar"
          component="span"
          style={{
            position: 'absolute',
            width:20,
            height:20,
            bottom:5,
            right: -5,
            backgroundColor: '#2196f3', // Fondo azul
            color: '#fff', // Texto blanco
            zIndex: 1, // Asegura que el ícono esté por encima del avatar
          }}
        >
          <AddIcon />
        </IconButton>
      </label>
    </div>
  );
}

export default AvatarComponent;
