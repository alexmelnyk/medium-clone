import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import User from "@/app/components/user/User";

export default function Comment({ comment }) {
  const createdAt = new Date(comment.createdAt).toDateString();

  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1} alignItems="center">
        <User user={comment.user} />
        <Typography variant="caption">{createdAt}</Typography>
      </Stack>
      <Typography variant="body2">{comment.content}</Typography>
      <Divider />
    </Stack>
  );
}
