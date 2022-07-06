import React from "react";
import axios from "axios";
import { Card, Row, Col, Button, Spinner, Container } from "react-bootstrap";

class News extends React.Component {
  state = {
    datas: [],
    isLoading: true,
    errors: null,
  };

  Databerita() {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=eadd2aabecb34406bbb626e78fffe688")
      .then((response) =>
        response.data.articles.map((newsdata) => ({
          name: `${newsdata.source.name}`,
          title: `${newsdata.title}`,
          description: `${newsdata.description}`,
          content: `${newsdata.content}`,
          image: `${newsdata.urlToImage}`,
          create: `${newsdata.publishedAt}`,
        }))
      )

      .then((datas) => {
        this.setState(
          {
            datas,
            isLoading: false,
          },
          console.log(datas)
        );
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.Databerita();
  }

  render() {
    const { isLoading, datas } = this.state;
    return (
      <React.Fragment>
        <Container>
          <Row>
            {!isLoading ? (
              datas.map((data) => {
                const { name, title, description, image, create } = data;
                return (
                  <Col key={data.title} sm={3}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img className="img-fluid" variant="top" src={image} alt="images" />
                      <Card.Body className="text-dark">
                        <span>{create}</span>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <h4>{name}</h4>
                        <Button variant="info">Read More</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <div className="container text-center">
                <Spinner animation="border" />
              </div>
            )}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default News;
