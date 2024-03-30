import Grid from "@mui/material/Grid";
import CreatePostForm from "./createPostForm/CreatePostForm";
import styles from "./write.module.scss";

export default async function Write() {
  return (
    <Grid container spacing={2} justifyContent="space-evenly" className={styles.writePage}>
      <Grid item xs={7}>
        <CreatePostForm />
      </Grid>
    </Grid>
  );
}
