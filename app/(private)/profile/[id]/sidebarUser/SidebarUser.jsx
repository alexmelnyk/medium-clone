"use client";

import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import User from "@/app/components/user/User";
import { followUser, getUser, unfollowUser } from "@/services/user";
import { showSnackBar, SnackbarProvider } from "@/utils/client";
import styles from "./sidebarUser.module.scss";

export default function SidebarUser({ user, currentUserId }) {
  const [loading, setLoading] = useState(false);
  const [profileUser, setProfileUser] = useState(user);
  const isOwnProfile = profileUser.id === currentUserId;
  const follow = (profileUser.followedBy || []).find((followItem) => {
    return followItem.followerId === currentUserId;
  });

  const updateUser = async () => {
    const updatedUser = await getUser(profileUser.id);

    if (updatedUser) {
      setProfileUser({ ...updatedUser });
    }
  };

  const handleFollow = async () => {
    setLoading(true);
    const follow = await followUser(profileUser.id);

    if (follow) {
      await updateUser();
      showSnackBar("success", `You followed ${profileUser.name}`);
    }
    setLoading(false);
  };

  const handleUnfollow = async () => {
    setLoading(true);
    const res = await unfollowUser(profileUser.id, follow.id);

    if (res) {
      await updateUser();
      showSnackBar("success", `You unfollowed ${profileUser.name}`);
    }
    setLoading(false);
  };

  return (
    <SnackbarProvider>
      <Stack direction="column" spacing={1} alignItems="flex-start">
        <User user={profileUser} mode="large" />
        <Typography variant={"caption"}>{profileUser._count.followedBy} followers</Typography>
        <Typography variant={"body2"} className={styles.userDescription}>
          Passionate about building beautiful, user-friendly solutions to complex problems. Currently turning tea into
          React/TypeScript while finishing up my CS degree.
        </Typography>
        {!isOwnProfile && (
          <>
            {!follow && (
              <LoadingButton
                variant="contained"
                color="success"
                loading={loading}
                loadingPosition="start"
                className={styles.followButton}
                onClick={handleFollow}
              >
                Follow
              </LoadingButton>
            )}
            {!!follow && (
              <LoadingButton
                variant="contained"
                color="success"
                loading={loading}
                loadingPosition="start"
                className={styles.followButton}
                onClick={handleUnfollow}
              >
                Unfollow
              </LoadingButton>
            )}
          </>
        )}
      </Stack>
    </SnackbarProvider>
  );
}
