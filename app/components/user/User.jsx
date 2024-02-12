import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function User({ user }) {
  const avatarPlaceholder = user.fullName[0];

  return (
    <Link href="/">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar sx={{ width: 24, height: 24 }} src={user.avatar}>
          {avatarPlaceholder}
        </Avatar>
        <Typography variant={"body2"}>{user.fullName}</Typography>
      </Stack>
    </Link>
  );
}
