import Grid from "@mui/material/Grid";
import { getSession } from "@/lib/auth";
import CreatePostForm from "./createPostForm/CreatePostForm";
import styles from "./write.module.scss";

export default async function Write() {
  const session = await getSession();
  return (
    <Grid container spacing={2} justifyContent="space-evenly" className={styles.writePage}>
      <Grid item xs={7}>
        <CreatePostForm user={session.user} />
      </Grid>
    </Grid>
  );
}
