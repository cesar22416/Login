/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const UploadGallery = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files).map((file) => URL.createObjectURL(file));
      setSelectedFiles(fileArray);
    }
  };

  const handleSendEmail = () => {
    const email = prompt('Ingrese su dirección de correo electrónico:');
    if (email) {
      const emailBody = selectedFiles.map((image) => `<img src="${image}" />`).join('<br>');
      const subject = 'Imágenes adjuntas';
      const mailtoLink = `mailto:${email}?subject=${subject}&body=${emailBody}`;
      window.location.href = mailtoLink;
    }
  };

  const handleClearImages = () => {
    setSelectedFiles([]);
  };

  return (
    <div>
      <input   type="file" onChange={handleFileChange} accept="image/*" multiple />
      <div className="gallery">
        {selectedFiles.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} style={{ maxWidth: '100px', margin: '5px' }} />
        ))}
      </div>
      {selectedFiles.length > 0 && (
        <div>
          <button className='btn' onClick={handleSendEmail}>Enviar por Correo</button>
          <button className='btn' onClick={handleClearImages}>Limpiar Imágenes</button>
        </div>
      )}
    </div>
  );
};

export default UploadGallery;
