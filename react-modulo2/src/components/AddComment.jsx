import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comments: {
      elementId: this.props.asin,
      comment: "",
      rate: "",
    },
  };

  postComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comments),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMzRlMjBlNzg3MDAwMTRkODkyMTMiLCJpYXQiOjE2ODA1NTMxODcsImV4cCI6MTY4MTc2Mjc4N30.L1mGL_vujEHiwWHlji99UcNuO2_ZFnOXbx1CxnIaI68",
          },
        }
      );
      if (response.ok) {
        alert("Recensione pubblicata");
        this.setState({
          comments: {
            elementId: this.props.asin,
            comment: "",
            rate: "",
          },
        });
      } else {
        console.log("error");
        alert("Errore nel caricamento");
      }
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.sendComment}>
          <Form.Group>
            <Form.Label>Comment text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comment here"
              value={this.state.comments.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comments,
                    comment: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comments.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comments,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
