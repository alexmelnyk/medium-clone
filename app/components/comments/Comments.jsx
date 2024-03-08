import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import WriteComment from "./writeComment/WriteComment";
import styles from "./comments.module.scss";

export default function Comments({ user, post }) {
  return (
    <Stack className={styles.comments} spacing={2}>
      <Typography variant="h6">Responses (3)</Typography>
      {user && <WriteComment user={user} post={post} />}
    </Stack>
  );
}
