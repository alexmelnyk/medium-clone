"use client";

import { useState } from "react";
import FileUpload from "@/app/components/fileUpload/FileUpload";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import PublishIcon from "@mui/icons-material/Publish";
import { Editor } from "@tinymce/tinymce-react";
import styles from "./page.module.scss";

const uploadImage = (image) => {
  const formData = new FormData();
  formData.append("file", image);

  return fetch("/api/uploadImage", {
    method: "POST",
    body: formData,
  });
};

export default function Write() {
  const [coverImage, setCoverImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const publishDisabled = !title || !content || !coverImage;

  const handlePublish = () => {
    setLoading(true);
  };

  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      <Grid item xs={7} className={styles.writePage}>
        <Stack direction="column" spacing={2}>
          <InputBase
            placeholder="Title"
            className={styles.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FileUpload className={styles.fileUpload} onChange={setCoverImage} />
          <Editor apiKey="22daebe3fhdtvqawhbwntne4wdu4t27h1rlzpccmox07amln" onEditorChange={setContent} />
          <LoadingButton
            disabled={publishDisabled}
            loading={loading}
            loadingPosition="start"
            startIcon={<PublishIcon />}
            variant="outlined"
            className={styles.publish}
            onClick={handlePublish}
          >
            Publish
          </LoadingButton>
        </Stack>
      </Grid>
    </Grid>
  );
}
