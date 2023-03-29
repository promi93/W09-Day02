import { Component } from "react";
import "../App.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import book1 from "../books/fantasy.json";
import book2 from "../books/history.json";
import book3 from "../books/horror.json";
import book4 from "../books/romance.json";
import book5 from "../books/scifi.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

class AllTheBooks extends Component {
  render() {
    return (
      <div>
        {/* FANTASY */}
        <Container
          fluid
          className="d-flex flex-wrap justify-content-center  m-2 p-2"
        >
          {book1.map((dish) => {
            return (
              <div>
                <Card key={book1.asin} id="card" style={{ width: "20rem" }}>
                  <Row>
                    <Col>
                      <Card.Body id="card-body">
                        <Card.Img id="card-img" variant="top" src={dish.img} />
                        <Card.Title id="card-title">{dish.title}</Card.Title>
                        <p
                          style={{
                            color: "red",
                            border: "1px solid black",
                            borderRadius: "20px",
                            marginLeft: "25%",
                            marginRight: "25%",
                            backgroundColor: "rgba(0, 0, 0, 0.283)",
                          }}
                        >
                          {dish.category}
                        </p>
                        <Card.Text>{dish.price}€</Card.Text>
                        <Button variant="warning">Acquista</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </div>
            );
          })}
        </Container>

        {/* HISTORY */}

        <Container
          fluid
          className="d-flex flex-wrap justify-content-center  m-2 p-2"
        >
          {book2.map((dish) => {
            return (
              <div>
                <Card key={book2.asin} id="card" style={{ width: "20rem" }}>
                  <Row>
                    <Col>
                      <Card.Body id="card-body">
                        <Card.Img id="card-img" variant="top" src={dish.img} />
                        <Card.Title id="card-title">{dish.title}</Card.Title>
                        <p
                          style={{
                            color: "red",
                            border: "1px solid black",
                            borderRadius: "20px",
                            marginLeft: "25%",
                            marginRight: "25%",
                            backgroundColor: "rgba(0, 0, 0, 0.283)",
                          }}
                        >
                          {dish.category}
                        </p>
                        <Card.Text>{dish.price}€</Card.Text>
                        <Button variant="warning">Acquista</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </div>
            );
          })}
        </Container>

        {/* HORROR */}

        <Container
          fluid
          className="d-flex flex-wrap justify-content-center  m-2 p-2"
        >
          {book3.map((dish) => {
            return (
              <div>
                <Card key={book3.asin} id="card" style={{ width: "20rem" }}>
                  <Row>
                    <Col>
                      <Card.Body id="card-body">
                        <Card.Img id="card-img" variant="top" src={dish.img} />
                        <Card.Title id="card-title">{dish.title}</Card.Title>
                        <p
                          style={{
                            color: "red",
                            border: "1px solid black",
                            borderRadius: "20px",
                            marginLeft: "25%",
                            marginRight: "25%",
                            backgroundColor: "rgba(0, 0, 0, 0.283)",
                          }}
                        >
                          {dish.category}
                        </p>
                        <Card.Text>{dish.price}€</Card.Text>
                        <Button variant="warning">Acquista</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </div>
            );
          })}
        </Container>

        {/* ROMANCE */}

        <Container
          fluid
          className="d-flex flex-wrap justify-content-center  m-2 p-2"
        >
          {book4.map((dish) => {
            return (
              <div>
                <Card key={book4.asin} id="card" style={{ width: "20rem" }}>
                  <Row>
                    <Col>
                      <Card.Body id="card-body">
                        <Card.Img id="card-img" variant="top" src={dish.img} />
                        <Card.Title id="card-title">{dish.title}</Card.Title>
                        <p
                          style={{
                            color: "red",
                            border: "1px solid black",
                            borderRadius: "20px",
                            marginLeft: "25%",
                            marginRight: "25%",
                            backgroundColor: "rgba(0, 0, 0, 0.283)",
                          }}
                        >
                          {dish.category}
                        </p>
                        <Card.Text>{dish.price}€</Card.Text>
                        <Button variant="warning">Acquista</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>

                {/* SCIFI */}

                <Container
                  fluid
                  className="d-flex flex-wrap justify-content-center  m-2 p-2"
                >
                  {book5.map((dish) => {
                    return (
                      <div>
                        <Card
                          key={book5.asin}
                          id="card"
                          style={{ width: "20rem" }}
                        >
                          <Row>
                            <Col>
                              <Card.Body id="card-body">
                                <Card.Img
                                  id="card-img"
                                  variant="top"
                                  src={dish.img}
                                />
                                <Card.Title id="card-title">
                                  {dish.title}
                                </Card.Title>
                                <p
                                  style={{
                                    color: "red",
                                    border: "1px solid black",
                                    borderRadius: "20px",
                                    marginLeft: "25%",
                                    marginRight: "25%",
                                    backgroundColor: "rgba(0, 0, 0, 0.283)",
                                  }}
                                >
                                  {dish.category}
                                </p>
                                <Card.Text>{dish.price}€</Card.Text>
                                <Button variant="warning">Acquista</Button>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      </div>
                    );
                  })}
                </Container>
              </div>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default AllTheBooks;
