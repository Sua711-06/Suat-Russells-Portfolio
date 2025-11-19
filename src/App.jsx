import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/Projects",
    element: <Projects />
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*", // Catches all unmatched paths
    element: <NoPage />,
  },
]);

function App() {
  return (
    <div>
      <Navbar  expand="lg" className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
