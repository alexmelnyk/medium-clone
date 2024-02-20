import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function User({ user }) {
  const avatarPlaceholder = user.name[0];

  return (
    <Link href={`/profile/${user.id}`}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar sx={{ width: 24, height: 24 }} src={user.image}>
          {avatarPlaceholder}
        </Avatar>
        <Typography variant={"body2"}>{user.name}</Typography>
      </Stack>
    </Link>
  );
}
