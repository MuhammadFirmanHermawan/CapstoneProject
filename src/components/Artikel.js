import { Card, Row, Col } from "react-bootstrap";
import card from "../assets/card.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const Artikel = () => {
  return (
    <div className="hero-section container">
      <Row className="card-grid">
        <Col md={3}>
          <Card.Link className="card text-white">
            <Card.Img className="card_image" src={card} alt="Card image" />
            <Card.ImgOverlay className="card-title">
              <Card.Title className=" text-center">
                <h5>Pencemaran Berat</h5>
              </Card.Title>
            </Card.ImgOverlay>
          </Card.Link>
        </Col>
        <Col md={3}>
          <Card.Link className="card text-white">
            <Card.Img className="card_image" src={card2} alt="Card image" />
            <Card.ImgOverlay className="card-title">
              <Card.Title className=" text-center">
                <h5>Pencemaran Berat</h5>
              </Card.Title>
            </Card.ImgOverlay>
          </Card.Link>
        </Col>
        <Col md={3}>
          <Card.Link className="card text-white">
            <Card.Img className="card_image" src={card3} alt="Card image" />
            <Card.ImgOverlay className="card-title">
              <Card.Title className=" text-center">
                <h5>Pencemaran Berat</h5>
              </Card.Title>
            </Card.ImgOverlay>
          </Card.Link>
        </Col>
        <Col md={3}>
          <Card.Link className="card text-white">
            <Card.Img className="card_image" src={card4} alt="Card image" />
            <Card.ImgOverlay className="card-title">
              <Card.Title className=" text-center">
                <h5>Pencemaran Berat</h5>
              </Card.Title>
            </Card.ImgOverlay>
          </Card.Link>
        </Col>
      </Row>
    </div>
  );
};
export default Artikel;
