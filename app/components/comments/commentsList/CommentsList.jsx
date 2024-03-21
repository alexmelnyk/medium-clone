import Stack from "@mui/material/Stack";
import Comment from "../comment/Comment";

export default function CommentsList({ comments }) {
  return (
    <Stack spacing={1}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Stack>
  );
}
