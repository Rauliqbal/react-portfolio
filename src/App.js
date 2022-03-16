import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Navbar className="fixed-top navbar-mri " expand="lg">
               <Container>
                  <Navbar.Brand as={Link} to="/">
                     React-Bootstrap
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">
                           Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                           About
                        </Nav.Link>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>

            <div>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
