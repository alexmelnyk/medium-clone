"use client";

import { useState } from "react";
import FileUpload from "@/app/components/fileUpload/FileUpload";
import Grid from "@mui/material/Grid";
import styles from "./page.module.scss";

const uploadImage = async (image) => {
  const url = "/api/posts/111/uploadImage";
  const formData = new FormData();
  formData.append("file", image);

  return await fetch(url, {
    method: "POST",
    body: formData,
  });
};

export default function Write() {
  const [coverImage, setCoverImage] = useState(null);

  const handleUpload = (image) => {
    uploadImage(image);
  };

  return (
    <Grid container spacing={2} justifyContent="space-evenly" className={styles.writePage}>
      <Grid item xs={7}>
        <FileUpload className={styles.fileUpload} onChange={handleUpload} />
      </Grid>
    </Grid>
  );
}
