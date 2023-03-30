import SingleBook from "./SingleBook";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import book1 from "../books/fantasy.json";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class BookList extends Component {
  state = {
    bookFiltered: "",
  };
  filterBookList() {
    return book1.filter((dish) => {
      return dish.title
        .toLowerCase()
        .includes(this.state.bookFiltered.toLowerCase());
    });
  }

  render() {
    return (
      <Container fluid>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => {
              this.setState({
                bookFiltered: e.target.value,
              });
            }}
          />
          <Button variant="outline-success">Clicca</Button>
        </Form>
        <Row>
          <Col className="d-flex flex-wrap justify-content-center mt-4">
            {this.filterBookList().map((books) => {
              return (
                <SingleBook
                  key={books.asin}
                  img={books.img}
                  title={books.title}
                  category={books.category}
                  price={books.price}
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
