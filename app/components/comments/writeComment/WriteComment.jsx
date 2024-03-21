"use client";

import { useState } from "react";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import LoadingButton from "@mui/lab/LoadingButton";
import User from "../../user/User";
import styles from "./writeComment.module.scss";

export default function WriteComment({ user, onSave }) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRespond = async () => {
    setLoading(true);
    const res = await onSave(comment);

    if (res) {
      setComment("");
    }

    setLoading(false);
  };

  return (
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
  );
}
