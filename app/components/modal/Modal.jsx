"use client";

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./modal.module.scss";

export default function Modal({ children, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <IconButton onClick={onClose} className={styles.closeIcon}>
        <CloseIcon />
      </IconButton>
      <div className={styles.modalContent}>{children}</div>
    </Dialog>
  );
}

export function useModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return [open, handleOpen, handleClose];
}
