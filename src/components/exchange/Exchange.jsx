/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutButton from '../Close';
import { NavBar } from '../menu/NavBar'; // Asumiendo que el componente NavBar se encuentra en './NavBar'


const Exchange = () => {
  const [url, setUrl] = useState('https://randomuser.me/api/');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setData(responseJSON);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  const refreshSearch = () => {
    // Actualiza la URL forzando la recarga de los datos
    setUrl(`https://randomuser.me/api/?refresh=${Date.now()}`);
  };

  if (!data || !data.results) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="Fondo">
      <Link to="/login">
        <LogoutButton />
      </Link>
      <Button variant="contained" onClick={refreshSearch} style={{ marginBottom: '1rem' }}>Actualizar búsqueda</Button>
      {data.results.map((character, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia component="img" src={character.picture.large} alt={`${character.name.first} ${character.name.last}`} sx={{ height: 345 }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nombre: {character.name.first} {character.name.last}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Estado: {character.location.state}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Especie: {character.gender}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <NavBar />
    </div>
  );
};

export default Exchange;
