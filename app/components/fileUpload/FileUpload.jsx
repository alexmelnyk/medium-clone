"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import styles from "./fileUpload.module.scss";

export default function FileUpload({ className, onChange }) {
  const [file, setFile] = useState(null);

  const handleUpload = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    onChange(acceptedFiles[0]);
  };

  const handleCancel = () => {
    setFile(null);
    onChange(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    onDrop: handleUpload,
  });

  return (
    <div className={className}>
      {!file && (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p className={styles.dropZone}>Drag'n'drop images, or click to select files</p>
        </div>
      )}
      {file && (
        <div className={styles.preview}>
          <IconButton className={styles.cancel} onClick={handleCancel}>
            <CancelIcon color="primary" />
          </IconButton>
          <img className={styles.img} src={URL.createObjectURL(file)} />
        </div>
      )}
    </div>
  );
}
