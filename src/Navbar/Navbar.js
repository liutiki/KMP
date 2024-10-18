import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Custombar() {
  return (
    <>
      {[ 'sm', ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Калининградское морское пароходство
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="nav justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/Company">О компании</Nav.Link>
                <Nav.Link as={Link} to="/Service">Тарифы</Nav.Link>
                <Nav.Link as={Link} to="/Contacts">Услуги</Nav.Link> 
                <Nav.Link as={Link} to="/Contacts">Контакты</Nav.Link>
                <Nav.Link as={Link} to="/Vacancies">Вакансии</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Custombar;