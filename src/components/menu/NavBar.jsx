
import { Link } from 'react-router-dom';
import '../../main';
export const NavBar = () => {
  return (
  
    <div className='NavbarContainer'>
      <Link to='Home'className='btn btn-outline-danger'>
        <span className="material-symbols-outlined">
          logout
        </span>
      </Link>
      <Link to=''className='btn btn-outline-danger'>
        <span className="material-symbols-outlined">
          library_add
        </span>
      </Link>
      <Link to='' className='btn btn-outline-danger'>
        <span className="material-symbols-outlined">
          view_cozy</span>
      </Link>
      <Link to='' className='btn btn-outline-danger'>
        <span className="material-symbols-outlined">
          favorite
        </span>
      </Link>
      <Link className='btn btn-outline-danger'>
        <span className="material-symbols-outlined">
          search_check
        </span>
      </Link>
     
    </div>
  );
};

export default NavBar;
