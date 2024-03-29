"use client";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PostActionItem from "./PostActionItem";
import Comments from "../comments/Comments";

export default function CommentPostAction({ user, post }) {
  const [open, setOpen] = useState(false);
  const count = post._count.comments;
  return (
    <>
      <PostActionItem icon={<ChatBubbleOutlineOutlinedIcon size="small" />} count={count} onClick={setOpen} />
      <Drawer open={Boolean(open)} anchor="right" onClose={() => setOpen(false)}>
        <Comments user={user} post={post} />
      </Drawer>
    </>
  );
}
