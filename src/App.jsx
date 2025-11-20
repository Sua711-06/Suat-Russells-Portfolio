import './App.css'
import {LogoLight, LogoDark} from './assets/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import ViewTransitionRoutes from './ViewTransitionRoutes';

function App() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const logoSrc = isDarkMode ? LogoDark : LogoLight;

  return (
      <Container fluid className="p-0 m-0" style={{width: '100vw'}}>
        <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} expand="lg" sticky="top" style={{width: '100vw'}}>
          <Container fluid  className="p-2 px-4 w-100">
            <Navbar.Brand as={NavLink} to="/" >
              <img src={logoSrc} alt="Suat Russell Logo" style={{height: '3rem'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-auto h3">
                <Nav.Link as={NavLink} to="/" end viewTransition>Home</Nav.Link> |
                <Nav.Link as={NavLink} to="/about" viewTransition>About Me</Nav.Link> |
                <Nav.Link as={NavLink} to="/projects" viewTransition>My Projects and Work</Nav.Link> |
                <Nav.Link as={NavLink} to="/contact" viewTransition>Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container fluid className={`p-0 m-0`} style={{width: '100vw'}}>
          <ViewTransitionRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </ViewTransitionRoutes>
        </Container>
      </Container>
  )
}

export default App
