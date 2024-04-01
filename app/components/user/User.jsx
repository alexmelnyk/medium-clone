import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function User({ user, mode }) {
  const avatarPlaceholder = user.name[0];
  const isLargeMode = mode === "large";
  const direction = isLargeMode ? "column" : "row";
  const avatarSize = isLargeMode ? 74 : 24;
  const alignItems = isLargeMode ? "flex-start" : "center";

  return (
    <Link href={`/profile/${user.id}`}>
      <Stack direction={direction} alignItems={alignItems} spacing={1}>
        <Avatar sx={{ width: avatarSize, height: avatarSize }} src={user.image}>
          {avatarPlaceholder}
        </Avatar>
        <Typography variant={"body2"}>{user.name}</Typography>
      </Stack>
    </Link>
  );
}
