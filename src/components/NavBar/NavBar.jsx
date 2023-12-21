import CartWidget from '../CartWidget/CartWidget';


import "./Navbar.css"

import { Link } from 'react-router-dom';

const NavBar = () =>{
  return (
    <nav className="nav">
      <div className="logoContainer">
      <Link to="/"><img src="/logo-tr.png" alt="logo de la marca" className='imgLogo'/></Link>
      <CartWidget/>
      </div>
      <ul className="buttonList">
        <li><Link to={"/category/CGluten"} className='drop btn ConGluten'>Con Gluten</Link></li>
        <li><Link to={"/category/STACC"} className='drop btn SinTACC'>Sin TACC</Link></li>
        <li><Link  to="/" className="btn Opciones">Nuestras Opciones</Link></li>
      </ul>
    </nav>

  );
}

export default NavBar;


