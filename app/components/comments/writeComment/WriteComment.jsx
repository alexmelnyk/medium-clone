"use client";

import { useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import LoadingButton from "@mui/lab/LoadingButton";
import User from "../../user/User";
import styles from "./writeComment.module.scss";

const showSnackBar = (message, variant) => {
  enqueueSnackbar(message, {
    variant,
    autoHideDuration: 4000,
    anchorOrigin: { vertical: "top", horizontal: "right" },
  });
};

const saveComment = async (comment) => {
  return await fetch(`/api/posts/${comment.postId}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
  });
};

export default function WriteComment({ user, post }) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRespond = async () => {
    setLoading(true);

    const commentData = {
      postId: post.id,
      userId: user.id,
      content: comment,
    };

    const createCommentRes = await saveComment(commentData);

    if (!createCommentRes.ok) {
      showSnackBar("Comment is not saved!", "error");
      setLoading(false);
      return;
    }

    showSnackBar("Comment is saved!", "success");
    setComment("");
    setLoading(false);
  };

  return (
    <SnackbarProvider>
      <Paper elevation={1} className={styles.writeComment}>
        <Stack spacing={1}>
          <User user={user} />
          <TextareaAutosize
            placeholder="What are your thoughts?"
            className={styles.textArea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <LoadingButton
            variant="contained"
            color="success"
            disabled={!comment}
            loading={loading}
            loadingPosition="start"
            className={styles.respond}
            onClick={handleRespond}
          >
            Respond
          </LoadingButton>
        </Stack>
      </Paper>
    </SnackbarProvider>
  );
}
