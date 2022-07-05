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
              Beranda
            </Nav.Link>
            <Nav.Link href="#" className="nav text-white">
              Artikel
            </Nav.Link>
            <Nav.Link href="#" className="nav text-white">
              Informasi Air
            </Nav.Link>
            <Nav.Link href="#" className="nav text-white">
              Bantuan
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="WebDesc">
        <div className="textBox col-6">
          <h1>Solusi dalam menanggulangi pencemaran air di Sungai Citarum dan mencegah terjadinya banjir</h1>
        </div>
        <div className="WeatherBox col-6">
          <Cuaca />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
