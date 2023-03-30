import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    return (
      <Card className="m-3" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "20rem" }}
          variant="top"
          src={this.props.img}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <p>{this.props.category}</p>
          <Card.Text>{this.props.price}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
