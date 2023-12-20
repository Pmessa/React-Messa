import CartWidget from '../CartWidget/CartWidget';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

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
        <li><Link to={"/category/CGluten"} className='drop'><button className="btn Con Gluten">Con Gluten</button></Link></li>
        <li>  <Link to={"/category/STACC"} className='drop'><button className="btn Sin TACC">Sin TACC</button></Link></li>
        <li><Link  to="/"><button className="btn Opciones">Nuestras Opciones</button></Link></li>
      </ul>
    </nav>

  );
}

export default NavBar;



{/* <Navbar expand="lg" className="bg-body">
<Container fluid className='container'>
  <Navbar.Brand><Link to="/"><img src="/logo-tr.png" alt="logo de la marca" className='imgLogo'/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
      >
      <Nav.Link><Link  to="/">Alimentos Saludables</Link></Nav.Link>
      <NavDropdown title="Productos" id="navbarScrollingDropdown">
        <NavDropdown.Item>
        <Link to={"/category/CGluten"} className='drop'>Con Gluten</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
        <NavDropdown.Divider/>
          <Link to={"/category/STACC"} className='drop'>Sin TACC</Link>
        </NavDropdown.Item>


      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
    <CartWidget/>
</Container>

</Navbar> */}