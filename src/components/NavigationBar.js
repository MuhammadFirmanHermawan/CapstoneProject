import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavigationBar.css";
import Cuaca from "./Weather";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg position-fixed" variant="dark">
        
          <Navbar.Brand className="logo" href="#home">
            CITARUM HARUM
          </Navbar.Brand>
          <div className="col" id="navbarNavAltMarkup">
            <Nav className="mx-3">
              <Nav.Link href="#" className="nav text-white ">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="nav text-white">
                Artikel
              </Nav.Link>
              <Nav.Link href="#" className="nav text-white">
                Kadar Air
              </Nav.Link>
              <Nav.Link href="#" className="nav text-white">
                Ketinggian Air
              </Nav.Link>
              <Nav.Link href="#" className="nav text-white">
                Bantuan
              </Nav.Link>
            </Nav>
          </div>
      </Navbar>
      <div className="WebDesc">
          <div className="textBox col-6">
            <h1>Blabla merupakan solusi bagi kita dalam melihat kualitas air di Sungai Citarum</h1>
          </div>
            <div className="WeatherBox col-6">
          <Cuaca />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
