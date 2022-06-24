import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navbar navbar-expand-lg position-fixed" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            CITARUM HARUM
          </Navbar.Brand>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <Nav className=" mx-auto">
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
        </Container>
      </Navbar>
      <div class="WebDesc">
        <h1>Blabla merupakan solusi bagi kita dalam melihat kualitas air di Sungai Citarum</h1>
      </div>
    </div>
  );
};

export default NavigationBar;
