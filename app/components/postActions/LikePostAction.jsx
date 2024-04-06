"use client";

import { useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { likePost, dislikePost } from "@/services/post";
import PostActionItem from "./PostActionItem";

function getLikeByUser(likes, user) {
  return user && likes.find((like) => like.userId === user.id);
}

export default function LikePostAction({ user, post }) {
  const [count, setCount] = useState(post._count.likes);
  const [like, setLike] = useState(getLikeByUser(post.likes, user));
  const iconColor = user && like ? "primary" : "";

  const handleLike = async () => {
    const likeRes = await likePost(post.id);

    if (likeRes) {
      setCount(count + 1);
      setLike({ ...likeRes });
    }
  };

  const handleDislike = async () => {
    const likeRes = await dislikePost(post.id, like.id);

    if (likeRes) {
      setCount(count - 1);
      setLike(null);
    }
  };

  const handleClick = () => {
    like ? handleDislike() : handleLike();
  };

  return (
    <PostActionItem
      icon={<ThumbUpOutlinedIcon size="small" color={iconColor} />}
      count={count}
      onClick={handleClick}
      disabled={!user}
    />
  );
}
