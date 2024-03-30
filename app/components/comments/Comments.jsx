import { useEffect, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { getComments, saveComment } from "@/services/comments";
import WriteComment from "./writeComment/WriteComment";
import CommentsList from "./commentsList/CommentsList";
import styles from "./comments.module.scss";

const showSnackBar = (variant, message) => {
  enqueueSnackbar(message, {
    variant,
    autoHideDuration: 4000,
    anchorOrigin: { vertical: "top", horizontal: "right" },
  });
};

export default function Comments({ user, post }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    setLoading(true);
    const commentsRes = await getComments(post.id);
    setComments(commentsRes);
    setLoading(false);
  };

  const handleCommentSave = async (content) => {
    const commentData = {
      postId: post.id,
      content,
    };

    const comment = await saveComment(commentData);

    if (!comment) {
      showSnackBar("error", "Comment is not saved");
      return null;
    }

    showSnackBar("success", "Comment is saved!");
    fetchComments();
    return comment;
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <SnackbarProvider>
      <Stack className={styles.comments} spacing={2}>
        <Typography variant="h6">Responses ({comments.length})</Typography>
        {user && <WriteComment user={user} onSave={handleCommentSave} />}
        {loading && (
          <>
            <Skeleton height={60} />
            <Skeleton height={60} />
            <Skeleton height={60} />
            <Skeleton height={60} />
          </>
        )}
        {!loading && <CommentsList comments={comments} />}
      </Stack>
    </SnackbarProvider>
  );
}
