import { Image, Button, Row, Col } from "react-bootstrap";
import "./Footer.css";
import copyright from "../assets/copyright.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import gigih from "../assets/GG.png";
import yabb from "../assets/yabb.png";

const Footer = () => {
  return (
    <Row className="footer container">
      <Col md={2} className="group1 mx-5">
        <Button variant="dark" type="button" className="progressbutton ">
          Our Progress
        </Button>
        <Image src={copyright} alt="copyright" className="copyright center" />
      </Col>
      <Col md={2}>
        <div className="group2 ">
          <div className="NamesOfGroup row">
            <h6 className="fw-bold">Zafira Galea</h6>
            <p>KMG2FE5023</p>
            <p>Programmer, UI/UX Design</p>
            <p>
              <a href="#">
                <Image src={mail} className="mail" />
              </a>
              <a href="https://www.linkedin.com/in/zafira-galea/">
                <Image src={linkedin} className="linkedin" />
              </a>
            </p>
          </div>
        </div>
      </Col>
      <Col md={2}>
        <div className="group2 ">
          <div className="NamesOfGroup row">
            <h6 className="fw-bold">M Firman Hermawan</h6>
            <p>KMG2FE5023</p>
            <p>Programmer</p>
            <p>
              <a href="#">
                <Image src={mail} className="mail" />
              </a>
              <a href="https://www.linkedin.com/in/zafira-galea/">
                <Image src={linkedin} className="linkedin" />
              </a>
            </p>
          </div>
        </div>
      </Col>
      <Col md={2}>
        <div className="group2 ">
          <div className="NamesOfGroup row">
            <h6 className="fw-bold">Fadhil Rausyanfikr</h6>
            <p>KMG2FE5023</p>
            <p>Programmer</p>
            <p>
              <a href="#">
                <Image src={mail} className="mail" />
              </a>
              <a href="https://www.linkedin.com/in/zafira-galea/">
                <Image src={linkedin} className="linkedin" />
              </a>
            </p>
          </div>
        </div>
      </Col>
      <Col md={2}>
        <div className="group2 ">
          <div className="NamesOfGroup row">
            <h6 className="fw-bold">Ruth Calista P S</h6>
            <p>KMG2FE5023</p>
            <p>
              <a href="#">
                <Image src={mail} className="mail" />
              </a>
              <a href="https://www.linkedin.com/in/zafira-galea/">
                <Image src={linkedin} className="linkedin" />
              </a>
            </p>
          </div>
        </div>
      </Col>
      <Col md={2}>
        <div className="group2 ">
          <div className="NamesOfGroup row">
            <h6 className="fw-bold">Lia Nur Halimah</h6>
            <p>KMG2FE5023</p>
            <p>
              <a href="#">
                <Image src={mail} className="mail" />
              </a>
              <a href="https://www.linkedin.com/in/zafira-galea/">
                <Image src={linkedin} className="linkedin" />
              </a>
            </p>
          </div>
        </div>
      </Col>
      {/* <Col md={2}>
        <Image src={gigih} className="gigihImage" />
      </Col>
      <Col md={2}>
        <Image src={yabb} className="yabbImage" />
      </Col> */}
    </Row>
  );
};
export default Footer;
