"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./fileUpload.module.scss";

export default function FileUpload({ className, onChange }) {
  const [file, setFile] = useState(null);

  const handleUpload = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    onChange(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    onDrop: handleUpload,
  });

  return (
    <div className={className}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className={styles.dropZone}>Drag'n'drop images, or click to select files</p>
      </div>
      {file && (
        <div className={styles.preview}>
          <img className={styles.img} src={URL.createObjectURL(file)} alt="Uploaded file" />
        </div>
      )}
    </div>
  );
}
