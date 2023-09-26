import CartWidget from '../CartWidget/CartWidget';


 
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./Navbar.css"

import { Link } from 'react-router-dom';

const NavBar = () =>{
  return (
    <Navbar expand="lg" className="bg-body">
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
            <Nav.Link><Link to={"/create/products"}  id='cosnat'>Crear Producto</Link></Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item>
              <Link to={"/category/CGluten"} className='drop'>Con Gluten</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/category/STACC"} className='drop'>Sin TACC</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action5">
                eBooks de recetas
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              />
            <Button variant="outline-dark">Buscar</Button>
          </Form>
        </Navbar.Collapse>
          <CartWidget/>
      </Container>

      </Navbar>
  );
}

export default NavBar;