import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaPlus, FaTh, FaHeart, FaSearch } from 'react-icons/fa'; // Importa los iconos de ReactJS que necesites

export const NavBar = () => {
  const handleLogout = () => {
    // Aquí deberías implementar la lógica para cerrar la sesión del usuario
    // Por ejemplo, podrías llamar a una función que maneje el cierre de sesión
    console.log('Sesión cerrada');
  };

  return (
    <div className='NavbarContainer'>
      {/* Enlace para cerrar sesión */}
      <Link to='/' onClick={() => handleLogout()}>
        <FaSignOutAlt /> {/* Icono de logout */}
      </Link>
      {/* Resto de enlaces */}
      <Link to='/add'>
        <FaPlus /> {/* Icono de add */}
      </Link>
      <Link to='/view'>
        <FaTh /> {/* Icono de view */}
      </Link>
      <Link to='/favorites'>
        <FaHeart /> {/* Icono de favorite */}
      </Link>
      <Link to='/search'>
        <FaSearch /> {/* Icono de search */}
      </Link>
    </div>
  );
};

export default NavBar;
