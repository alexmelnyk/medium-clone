"use client";

import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import User from "@/app/components/user/User";
import { followUser, getUser } from "@/services/user";
import styles from "./sidebarUser.module.scss";

export default function SidebarUser({ user, isOwnProfile }) {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);

  const updateUser = async () => {
    const updatedUser = await getUser(currentUser.id);

    if (updatedUser) {
      setCurrentUser({ ...updatedUser });
    }
  };

  const handleFollow = async () => {
    setLoading(true);
    const follow = await followUser(currentUser.id);

    if (follow) {
      await updateUser();
    }
    setLoading(false);
  };

  return (
    <Stack direction="column" spacing={1} alignItems="flex-start">
      <User user={currentUser} mode="large" />
      <Typography variant={"caption"}>{currentUser._count.followedBy} followers</Typography>
      <Typography variant={"body2"} className={styles.userDescription}>
        Passionate about building beautiful, user-friendly solutions to complex problems. Currently turning tea into
        React/TypeScript while finishing up my CS degree.
      </Typography>
      {!isOwnProfile && (
        <LoadingButton
          variant="contained"
          color="success"
          disabled={false}
          loading={loading}
          loadingPosition="start"
          className={styles.followButton}
          onClick={handleFollow}
        >
          Follow
        </LoadingButton>
      )}
    </Stack>
  );
}
