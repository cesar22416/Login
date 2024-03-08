
import { Link } from 'react-router-dom';
import '../../main';
export const NavBar = () => {
  return (
  
    <div className='NavbarContainer'>
      <Link to='Home'className='btn'>
        <span className="material-symbols-outlined">
          logout
        </span>
      </Link>
      <button className='btn'>
        <span className="material-symbols-outlined">
          library_add
        </span>
      </button>
      <Link to='/Galleri'>
        <span className="material-symbols-outlined">
view_cozy
</span>
      </Link>
      <button className='btn'>
        <span className="material-symbols-outlined">
          favorite
        </span>
      </button>
      <button className='btn'>
        <span className="material-symbols-outlined">
          search_check
        </span>
      </button>
     
    </div>
  );
};

export default NavBar;
