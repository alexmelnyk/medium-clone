"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import Modal, { useModal } from "@/app/components/modal/Modal";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./signIn.module.scss";

export default function SignIn() {
  const [open, handleOpen, handleClose] = useModal();

  return (
    <>
      <Chip color="info" variant="elevated" label="Sign In" onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <div className={styles.modalContent}>
          <Typography variant="h5">Welcome Back.</Typography>
          <Link href="/">
            <Chip
              className={styles.chip}
              icon={<GoogleIcon className={styles.icon} />}
              label="Sign in with Google"
              variant="outlined"
              onClick={() => onClose()}
            />
          </Link>
          <Link href="/">
            <Chip
              className={styles.chip}
              icon={<GitHubIcon className={styles.icon} />}
              label="Sign in with GitHub"
              variant="outlined"
              onClick={() => signIn("github")}
            />
          </Link>
          <Typography variant="caption" className={styles.caption}>
            Click “Sign in” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies
            to you.
          </Typography>
        </div>
      </Modal>
    </>
  );
}
