import { Component } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import book1 from "../books/fantasy.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";

class AllTheBooks extends Component {
  render() {
    return (
      <Container className="d-flex flex-wrap m-2 p-2">
        {book1.map((dish) => {
          return (
            <div>
              <Card style={{ width: "18rem" }}>
                <Row>
                  <Col xs={12} md={8} lg={8}>
                    <Card.Body>
                      <Card.Img variant="top" src={dish.img} />
                      <Card.Title>{dish.title}</Card.Title>
                      <Card.Text>{dish.price}€</Card.Text>
                      <Button variant="primary">Acquista</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
          );
        })}
      </Container>
    );
  }
}

export default AllTheBooks;
