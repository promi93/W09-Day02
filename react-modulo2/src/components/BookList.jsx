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
      <Container fluid className="px-5 my-4">
        <Form className="d-flex justify-content-center">
          <Form.Control
            type="search"
            placeholder="Cerca il tuo libro..."
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
