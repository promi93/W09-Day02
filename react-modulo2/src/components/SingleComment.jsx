import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMzRlMjBlNzg3MDAwMTRkODkyMTMiLCJpYXQiOjE2ODA1NTMxODcsImV4cCI6MTY4MTc2Mjc4N30.L1mGL_vujEHiwWHlji99UcNuO2_ZFnOXbx1CxnIaI68",
          },
        }
      );
      if (response.ok) {
        alert("Recensione eliminata correttamente");
      } else {
        alert("Error nella cancellazione");
      }
    } catch (error) {
      alert("Error nella cancellazione");
    }
  };
  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
