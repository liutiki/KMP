import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Custombar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="body-tertiary mb-3">
          <Container fluid>
            <div className="kmp-Top">
              <Navbar.Brand href="/" className="me-auto">Калининградское</Navbar.Brand>
              <Navbar.Brand href="/" className="me-auto">Морское Пароходство</Navbar.Brand>
              </div>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="toggle-right" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 <p className="me-offcanvas">Калининградское</p>
                 <p className="me-offcanvas">Морское Пароходство</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="nav justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/Company">О компании</Nav.Link>
                  <Nav.Link as={Link} to="/Service">Услуги</Nav.Link> 
                  <Nav.Link as={Link} to="/Vacancies">Вакансии</Nav.Link>
                  <Nav.Link as={Link} to="/Contacts">Контакты</Nav.Link>
                  <div className="company-contacts">
                  <div className="line-nav"></div>
                  <p>+7 (123) 456-78-90</p>
                  <p>info@kdsc.ru</p>
                  
                </div>
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

