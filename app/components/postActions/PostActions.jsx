"use client";

import { useState } from "react";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LikePostAction from "./LikePostAction";
import CommentPostAction from "./CommentPostAction";
import styles from "./postActions.module.scss";

export default function PostActions({ postType }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="space-between"
      className={styles.postActions}
    >
      <div>
        {postType === "full" && (
          <Stack direction="row" spacing={1}>
            <LikePostAction />
            <CommentPostAction />
          </Stack>
        )}
      </div>
      <Stack direction="row" spacing={1} alignItems="center">
        <BookmarkAddOutlinedIcon className={styles.bookmark} />
        <div className={styles.menu}>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem>Mute this author</MenuItem>
            <MenuItem>Report</MenuItem>
          </Menu>
        </div>
      </Stack>
    </Stack>
  );
}
