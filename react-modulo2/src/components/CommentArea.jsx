import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount = async () => {
    try {
      let response = fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMzRlMjBlNzg3MDAwMTRkODkyMTMiLCJpYXQiOjE2ODA1NTMxODcsImV4cCI6MTY4MTc2Mjc4N30.L1mGL_vujEHiwWHlji99UcNuO2_ZFnOXbx1CxnIaI68",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <>
        <AddComment asin={this.props.asin} />
        <CommentList commentsToShow={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
