import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ showComment }) => {
  return (
    <>
      <ListGroup style={{ color: "black" }} className="mt-2">
        {showComment.map((comment) => (
          <SingleComment comment={comment} key={comment._id} />
        ))}
      </ListGroup>
    </>
  );
};

export default CommentList;
