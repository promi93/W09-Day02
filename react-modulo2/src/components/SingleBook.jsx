import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  clickCard = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const cardClassName = this.state.selected ? "selected-card" : "";

    return (
      <Card
        className={cardClassName}
        key={this.props.asin}
        style={{ width: "18rem" }}
      >
        <Card.Img
          style={{ height: "20rem" }}
          variant="top"
          src={this.props.img}
          onClick={this.clickCard}
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
