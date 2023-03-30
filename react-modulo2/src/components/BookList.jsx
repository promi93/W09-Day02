import SingleBook from "./SingleBook";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import book1 from "../books/fantasy.json";

class BookList extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="d-flex flex-wrap justify-content-center mt-4">
            {book1.map((dish) => {
              return (
                <SingleBook
                  key={dish.asin}
                  img={dish.img}
                  title={dish.title}
                  category={dish.category}
                  price={dish.price}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
