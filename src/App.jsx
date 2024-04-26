import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/Login';
import Home from '../src/components/Home';
import './App.css';
import appFirebase from './components/fact';
import Exchange from './components/exchange/Exchange';
import Welcome from './components/fondoBase/Welcome';
import Galleri from './components/Galeri/Galleri'

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        
        <Route path='*' element={<Welcome/>} />
        <Route path="/Login" element={usuario ? <Home correoUsuario={usuario.email} /> : <Login />} />
        <Route path="/Exchange" element={<Exchange />} />
        <Route path="/Galleri" element={<Galleri/>} />
      </Routes>
    </Router>
  );
}

export default App;
